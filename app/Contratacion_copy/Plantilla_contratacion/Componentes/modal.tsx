
import React, { useEffect, useState} from 'react';
import C_Archivo from "./Archivo";
import { useSearchParams } from 'next/navigation'

interface Licitaciones {
  name: string
  id: number
  items: Licitaciones[]
  EsCarpeta: boolean
  path: string
}



const modal = ({InitFilename ,Finished ,Name, cerrado, HandleClick, isClosed }: { FolderPath: string; InitFilename: Licitaciones[]; Finished: boolean; Name: string ;cerrado: boolean; HandleClick: () => void; isClosed: (foldername: string) => boolean }) => {

const [File, setFile] = useState<File | null >(null);
const [Files, setFiles] = useState<File[]>([]);
const [UplFiles, setUplFiles] = useState<File[]>([]);
const [Filename, setFileName] = useState("");
const [FileArray, setFileArray] = useState<string[]>([]);
const [Enviado, setenviado] = useState<boolean>(false);
const [EnviadoSubir, setenviadoSubir] = useState<boolean>(false);
const [nombrepropuesta, setnombre] = useState<string>("");
const [Finishet, setFinished] = useState<boolean>(false);
const URLParams = useSearchParams()

useEffect(() => {
  setFinished(Finished);
  console.log(Finishet)
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
          <div className={`overlay ${!cerrado ? 'hidden anim_fade-out' : 'showed'}`}>
              <div className={`contenedor-modal ${!cerrado ? 'hidden-content anim_fade-outmove' : ''}`}>

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
  

                  <section className='contentMoodal'>
                      <h1> Descarga</h1>
                        { !isClosed(Name) ?
                        <div className='contentDownload'>{

                          InitFilename.map((File) => {
                            return (<div className='download' key={File.id}>
                              <h2>
                                  {File.name} 
                              </h2>
                             <span className='icon' onClick={() => DownloadFile(File.path, File.name)}>

                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                               <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                               <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                               </svg>
                             </span>
                          </div>

                            )
                          })
                          }
                        </div>
                          

                          :
                          <div className='contentDownload'>{

                            InitFilename.map((File) => {
                              return (<div className='download' key={File.id}>
                                <h2>
                                    {File.name} 
                                </h2>
                               <span className='icon' onClick={() => DownloadFile(File.path, File.name)}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                 <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                 <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                 </svg>
                               </span>
                            </div>
                              )
                            })
                            }
                          </div>
                          
                          

                        }
                          <h1>Subida de archivos</h1>
                        { !isClosed(Name) ? 
                          <form className='upload' onSubmit={
                            async (e) => {
                              e.preventDefault()
                              if (!File || nombrepropuesta.trim() === ""){
                                alert('Ingrese un documento o nombre de la propuesta');
                                return;
                              }
  
                              setenviado(true);
                              setenviadoSubir(true);

                              alert("Su archivo a sido subido")

                              Files.forEach(async (file) => { 
                                
                                
                             try{
                              const Contract = URLParams.get('contract') ?? ''
                              const form = new FormData()
                                form.set('File', file);
                                form.set('Name', nombrepropuesta)
                                form.set('Dirname', Name)
                                form.set('Contract', Contract)
  
                              //enviar al server
                              const res = await fetch('/api/Upload', {
                                  method: "POST",
                                  body: form
                                });
  
                                if(res.ok){
                                  console.log("archivo suubido")

                                  alert("Su archivo a sido subido")
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
                            <input type='text' placeholder='Nombre de la empresa :V' value={nombrepropuesta} onChange={(e) => setnombre(e.target.value)}></input>
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

                          { !Enviado ?
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

                          </div> :

                          <div></div> }

                          </form>

                          :

                          <p>Esta contratacion ya ha sido cerrada</p>
                          }
                  </section>
              </div>
          </div> 
      </>
    );
  
}

export default modal
