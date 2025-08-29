"use client"
import React, { useEffect, useState} from 'react';
import C_Archivo from "@/app/Contratacion/Componentes/Archivo"
import "./pqr.scss" 
import SessionProvider from "@/app/Componentes/SessionProvider";


function page() {
    const [File, setFile] = useState<File | null >(null);
    const [Files, setFiles] = useState<File[]>([]);
    const [UplFiles, setUplFiles] = useState<File[]>([]);
    const [Enviado, setenviado] = useState<boolean>(false);

    const [formdata, setform] = useState({
      nombre: "",
      mensaje: "",
      Correo: ""
    })

    const handlechangeForm = (e) => {
        setform({...formdata, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {


      try{
        const form = new FormData()
        form.set('mensaje', formdata.mensaje);
        form.set('nombre', formdata.nombre)
        form.set('correo', formdata.Correo)
        Files.forEach(file => form.append("Files", file))
        console.log(Files)
        const response = await fetch("/api/EnviarCorreoPQR", {
          method: "POST",
          body: form
        })

        const result = await response.json()
        console.log(result)
      }
      catch(e){
        console.log(e, "error al enviar formulario")
        alert("error al enviar formulario")
      }
      
    } 

    useEffect(() => {
        console.log(Files, "Holaaa");
        setUplFiles(Files);
      }, [Files]);


      useEffect(() => {
        console.log(File);
        console.log(Files);
      }, [File]);


      function EliminarElemento(FileDeleted: File |  null){
        if(FileDeleted){
          const filtered = Files.filter(file => file.lastModified != FileDeleted.lastModified);
          setFiles(filtered);
          console.log(filtered);
          setUplFiles(filtered);
        }
      }
      
    return (
    <SessionProvider>
    <div className='container-pqr'>
      <h1>Sección de PQRS</h1>

      <form onSubmit={handleSubmit}>
        <span className='Container-input'>
          <label htmlFor="nombre">Nombre y asunto</label>
          <input className='texto' type="text"  pattern="\[\w+\] .+" placeholder='[Nombre] Asunto' name='nombre' value={formdata.nombre} onChange={handlechangeForm} required />
        </span>
        <span className='Container-input'>
          <label htmlFor="Correo">Correo de respuesta</label>
          <input className='texto' type="text" placeholder='Correo' name='Correo' value={formdata.Correo} onChange={handlechangeForm} required />
        </span>

      <span className='upload-button-cont'>

      <button type='button'  className='botoneleccion'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                        </svg>
                      <input type='file' className='' onChange={(e) => {
                          setenviado(false);
                          console.log("cambio :p")
                          if (e.target && e.target.files){
                            const selectedFile = e.target.files[0];

                            if (selectedFile) {
                              setFile(selectedFile);

                              const ArrayFiles: File[] = [selectedFile, ...Files]
                              setFiles(ArrayFiles);
                            }
                            else{
                              console.log("debe subir un archivo")
                            }
                          }
                        
                          }}/>

          </button>
          Adjuntar archivos
      </span>

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
                                        <span key={arch.name}>{arch.name}</span>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>

        <textarea className='texto queja' placeholder='Descripcion de la queja' name="mensaje"  value={formdata.mensaje} onChange={handlechangeForm} required />
        <button type='submit' onSubmit={handleSubmit}>Enviar Correo</button>
        </form>
    </div>
  </SessionProvider>
  )
}

export default page
