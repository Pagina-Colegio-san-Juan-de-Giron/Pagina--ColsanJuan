'use client'
import React, {useEffect, useState} from 'react';
import { JsonArray, JsonObject } from '@prisma/client/runtime/library';
import C_Archivo from "../ModalA/Archivo"
import "./Contratacion.scss"




const page = ({ Nombre ,cerrado, HandleClick }: { Nombre: string; cerrado: boolean; HandleClick: () => void }) => {
const [File, setFile] = useState<File | null >(null);
const [Files, setFiles] = useState<File[]>([]);
const [UplFiles, setUplFiles] = useState<File[]>([]);
const [Filename, setFileName] = useState("");
const [FileArray, setFileArray] = useState<string[]>([]);
const [Enviado, setenviado] = useState<boolean>(false);
const [EnviadoSubir, setenviadoSubir] = useState<boolean>(false);
const [nombredirLic, setnombreLic] = useState<string>("");
const [explorer, setexplorer] = useState<JsonArray>();



  useEffect(() => {
    async function obtenerdirs() {
      const response = await fetch('/api/Secretaria');
      const data = await response.json();
      console.log(data);
      if(data) {
        setexplorer(data);
      }
      console.log(explorer)
  }

  obtenerdirs();
  }, []);

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
                        {Nombre}
                    </h2>
                </header>
                <span className='boton-cerrar' onClick={HandleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </span>

                <section className='content'>
                        <h1>Añadir licitacion</h1>
                        <form className='create' onSubmit={
                          async (e) => {
                            e.preventDefault()
                            if (!File || nombredirLic.trim() === ""){
                              alert('Ingrese un documento o nombre de la propuesta');
                              return;
                            }

                            setenviado(true);
                            setenviadoSubir(true);


                              
                              
                           try{
                            const form = new FormData()
                              form.set('File', File);
                              form.set('Name', nombredirLic)

                            //enviar al server
                            const res = await fetch('/api/Upload/Secretaria', {
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
                          }
                         }>
                            <div className='Cont_Name'>
                                Nombre de la licitación
                                <input type="text" value={nombredirLic} onChange={(e) => setnombreLic(e.target.value)}/>
                            </div> 

                      
                            <div className='Contenedor-subidas'>
                              <h2>Archivos Subidos</h2>
                              <div className='contenedorInfo' >
                                {
                                  UplFiles.map((Archivo) => {
                                    return(
                                      <C_Archivo enviado={Enviado} key={Archivo.lastModified} File={Archivo} Ffunction={EliminarElemento}/>
                                    );
                                  })
                                }
  
                                <div className={`${Enviado ? 'Yaenviados' : 'novisible'}`}>
                                  {
                                    UplFiles.map((arch) => {
                                      return(
                                        <span>{arch.name}</span>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>
  
                          <div className='contenedor-botones'>
                            <button type='button' disabled={Enviado} className={`${Enviado ? 'noclickeable' : 'botoneleccion'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                              </svg>
                              Subir peticiones
                              <input type='file' className={`${Enviado ? 'noclickeable' : ''}`} disabled={Enviado} onChange={(e) => {
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
                              
                                }}/>
                            </button>
                            <button className='botonsubida' disabled={EnviadoSubir}>Enviar</button>
                          </div>       
                        </form>
                </section>
            </div>
        </div> 
    </>
  );
}

export default page
