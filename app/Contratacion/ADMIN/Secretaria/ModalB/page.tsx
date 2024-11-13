import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { strict } from 'assert';
import { appendFile } from 'fs';
import { data } from 'autoprefixer';
import exp from 'constants';
import { JsonArray, JsonObject } from '@prisma/client/runtime/library';




const page = ({ cerrado, HandleClick }: { cerrado: boolean; HandleClick: () => void }) => {
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

                            <div className='Cont_File'>
                                Documento licitación
                                <input type='file' className={`${Enviado ? 'noclickeable' : ''}`} disabled={Enviado} onChange={(e) => {
                              console.log("cambio :p")
                              if (e.target && e.target.files){
                                const selectedFile = e.target.files[0];

                                if (selectedFile) {
                                  setFile(selectedFile);
                                  setFileName(selectedFile.name);
                                }
                                else{
                                  console.log("debe subir un archivo")
                                }
                              }
                            
                              }}/>
                            </div>

                            <button className='btnCrear'>CREAR</button>       
                        </form>
                </section>
            </div>
        </div> 
    </>
  );
}

export default page
