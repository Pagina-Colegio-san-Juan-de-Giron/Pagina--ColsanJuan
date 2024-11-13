'use client'
import React, {use, useContext, useEffect, useState, ChangeEvent, Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import C_Archivo from "./Archivo";
import { strict } from 'assert';
import { appendFile } from 'fs';


interface Fechas {
  nombre: string;
  Fecha: string;
}

const modal = ({ FolderPath ,InitFilename ,Finished ,Name, cerrado, HandleClick}: { FolderPath: string; InitFilename: string; Finished: boolean; Name: string ;cerrado: boolean; HandleClick: () => void ; }) => {

const [File, setFile] = useState<File | null >(null);
const [Files, setFiles] = useState<File[]>([]);
const [UplFiles, setUplFiles] = useState<File[]>([]);
const [Filename, setFileName] = useState("");
const [FileArray, setFileArray] = useState<string[]>([]);
const [Enviado, setenviado] = useState<boolean>(false);
const [EnviadoSubir, setenviadoSubir] = useState<boolean>(false);

const [nombrepropuesta, setnombre] = useState<string>("");

const [FechaInner, setFechaInner] = useState<string>("")
const [Finishet, setFinished] = useState<boolean>(false);

useEffect(() => {
  setFinished(Finished);
}, [])

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


 

  

  const DownloadFile = async (Filepath: string, filename: string) => {

    
    
    try{
        const res = await fetch(`/api/Secretaria/Download?Filepath=${Filepath}&Filename=${filename}`)
        const blob = await res.blob();

        const DisposicionContenido = res.headers.get('Content-disposition');
        if(DisposicionContenido){
            const Nombrecoincidido = DisposicionContenido.match(/filename="(.+)"/);
            const Nombre = Nombrecoincidido ? Nombrecoincidido[1] : "downloadedFile";
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a");
            link.href = url;
            link.download = Nombre
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }

        
    }
    catch(err){
        console.error("Error descargando:", err);
    }
}

    


    return (
      <>
          <div className={`overlay ${cerrado ? 'hidden anim_fade-out' : 'showed'}`}>
              <div className={`contenedor-modal ${cerrado ? 'hidden-content anim_fade-outmove' : ''}`}>
                  <header className='titulo-modal'>
                      <h2>
                          {Name}
                      </h2>
                  </header>
                  <span className='boton-cerrar' onClick={HandleClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>
                  </span>
  
                  <section className='content'>
                          <h1>Subida de archivos</h1>
                         
                          <form className='upload' onSubmit={
                            async (e) => {
                              e.preventDefault()
                              if (!File || nombrepropuesta.trim() === "" || FechaInner === "" ){
                                alert('Ingrese un documento, nombre de la propuesta o fecha de cierre');
                                return;
                              }
  
                              setenviado(true);
                              setenviadoSubir(true);
                              
                              try{
                                  const form = new FormData()
                                    form.set('Fecha', FechaInner);
                                    form.set('Nombre', nombrepropuesta)
                                  const res = await fetch('/api/Secretaria/Fechas', {
                                    method: "POST",
                                    body: form
                                  })

                                  if(res.ok){
                                    console.log("Fecha Puesta")
                                  }else{
                                    throw new Error('Error en la respuesta de la API');
                                  }
                              }
                              catch(error){
                                console.log(error);
                              }
  
  
                              Files.forEach(async (file) => { 
                                
                                
                             try{
                              const form = new FormData()
                                form.set('File', file);
                                form.set('Name', nombrepropuesta)
  
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
                             })
                            }
                           }
                          >
                            <input type='text' placeholder='Nombre de licitacion' value={nombrepropuesta} onChange={(e) => {setnombre(e.target.value);}}></input>
                             <h2><b>Fecha de cierre</b></h2>
                            <input type="datetime-local" value={FechaInner} onChange={(e) => setFechaInner(e.target.value)}/>
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

export default modal
