import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import C_Archivo from "./Archivo";
import { strict } from 'assert';
import { appendFile } from 'fs';




const modal = ({ cerrado, HandleClick }: { cerrado: boolean; HandleClick: () => void }) => {
const [File, setFile] = useState<File | null >(null);
const [Files, setFiles] = useState<File[]>([]);
const [UplFiles, setUplFiles] = useState<File[]>([]);
const [Filename, setFileName] = useState("");
const [FileArray, setFileArray] = useState<string[]>([]);


  useEffect(() => {
    console.log(File);
    console.log(Files);
    console.log(Filename);
  }, [File]);


  useEffect(() => {
    console.log(Files, "Holaaa");
    setUplFiles(Files);
  }, [Files]);

  function EliminarElemento(FileDeleted: File |  null){
    if(FileDeleted){
      const filtered = Files.filter(file => file.lastModified != FileDeleted.lastModified);
      setFiles(filtered);
      console.log(filtered);
      setUplFiles(filtered);
    }
  }


  return (
    <>
        <div className={`overlay ${cerrado ? 'hidden anim_fade-out' : 'showed'}`}>
            <div className={`contenedor-modal ${cerrado ? 'hidden-content anim_fade-outmove' : ''}`}>
                <header className='titulo-modal'>
                    <h2>
                        Hola :)
                    </h2>
                </header>
                <span className='boton-cerrar' onClick={HandleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </span>

                <section className='content'>
                    <h1> Descarga</h1>
                        <div className='download'>
                            <h2>
                                Helloworld.pdf
                            </h2>
                           <span className='icon'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                             <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                             <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                             </svg>
                           </span>
                        </div>

                        <h1>Subida de archivos</h1>

                        <form className='upload' onSubmit={
                          async (e) => {
                            e.preventDefault()
                            if (!File) return;
                          Files.forEach(async (file) => { 
                            setUplFiles([]);
                           try{
                            const form = new FormData()
                              form.set('File', file);

                            //enviar al server
                            const res = await fetch('api/Upload', {
                                method: "POST",
                                body: form
                              });

                              if(res.ok){
                                console.log("archivo suubido")
                              }

                              const data = await res.json()
                              console.log(data)

                            }
                            catch(error){
                              console.log(error);
                             }
                          })
                          }
                         }
                        >

                          <div className='Contenedor-subidas'>
                            <h2>Archivos Subidos</h2>
                            <div className='contenedorInfo' >
                              {
                                UplFiles.map((Archivo) => {
                                  return(
                                    <C_Archivo key={Archivo.lastModified} File={Archivo} Ffunction={EliminarElemento}/>
                                  );
                                })
                              }
                            </div>
                          </div>

                        <div className='contenedor-botones'>
                          <button type='button' className='botoneleccion'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            Subir peticiones
                            <input type='file' onChange={(e) => {
                              console.log("cambio :p")
                              if (e.target && e.target.files){
                                const selectedFile = e.target.files[0];

                                if (selectedFile) {
                                  setFile(selectedFile);
                                  setFileName(selectedFile.name);
                                  const newArray: string[] = [selectedFile.name, ...FileArray];
                                  setFileArray(newArray);

                                  const ArrayFiles: File[] = [selectedFile, ...Files]
                                  setFiles(ArrayFiles);
                                }
                                else{
                                  console.log("debe subir un archivo")
                                }
                              }
                            
                              }} className='icon-upload'/>
                          </button>
                          <button className='botonsubida'>Enviar</button>
                        </div>
                        </form>
                </section>
            </div>
        </div> 
    </>
  );
}

export default modal
