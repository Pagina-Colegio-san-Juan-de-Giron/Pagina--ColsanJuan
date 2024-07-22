'use client'
import ClosedsContext from "@/app/Context/ClosedsContext";
import exp from "constants";
import path from "path";
import { space } from "postcss/lib/list";
import React, { JSXElementConstructor, useContext, useState } from "react";
import Añadir from "../../ModalB/page"

interface ExplorerItem {
    id: number;
    EsCarpeta: boolean;
    name: string;
    items: ExplorerItem[];
    path: string;
}

interface FolderProps {
    explorer: ExplorerItem[];
  }

  

 
  const HandleSubmit = async (filepath: string, filename: string) => {
        try{
            const res = await fetch(`/api/Secretaria/Download?Filepath=${filepath}&Filename=${filename}`)

            if(res.ok){
              console.log("archivo manejado")
            }
        }
        catch(err){
            console.log("ERROR: ", err)
        }
  }



function Folder({ explorer }: FolderProps) {

    const [expandedFolders, setExpandedFolders] = useState<number[]>([]);
    const [downloadStat, setDwnloadStat] = useState("");
    const [ceerrado, setceerrado] = useState<boolean>(true)

    const HandleeClick = () => {
        setceerrado(!ceerrado);
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
                setDwnloadStat("Descargado");
            }
    
            
        }
        catch(err){
            console.error("Error descargando:", err);
            setDwnloadStat("Error");
        }
    }

    const ShowFile = async (Filepath: string, filename: string) => {

    
    
        try{
            const res = await fetch(`/api/Secretaria/Preview?Filepath=${Filepath}&Filename=${filename}`)
            const blob = await res.blob();
    
            const DisposicionContenido = res.headers.get('Content-disposition');
            if(DisposicionContenido){
                const Nombrecoincidido = DisposicionContenido.match(/filename="(.+)"/);
                const Nombre = Nombrecoincidido ? Nombrecoincidido[1] : "downloadedFile";
                const url = window.URL.createObjectURL(blob)
                const PestañaPrev = window.open(url, '_blank');
                if (PestañaPrev) {
                    PestañaPrev.onload = () => {
                    window.URL.revokeObjectURL(url);
                };
            }
            else{
                console.error("Fallo al previsualizar");
            }
            }
    
            
        }
        catch(err){
            console.error("Error descargando:", err);
            setDwnloadStat("Error");
        }
    }

    const CambiarExpan = (id: number) => {
        setExpandedFolders(expandedFolders.includes(id)
            ? expandedFolders.filter(folderId => folderId !== id)
            : [...expandedFolders, id]);
    }

    if (!explorer) {
        return <div>Loading...</div>
      }

      console.log(explorer)

      const ClosedContext = useContext(ClosedsContext);

      if (ClosedContext){
        const {isClosed ,Closed, setClosed, HandleCloseds} = ClosedContext

        return (<div className="Folders-container">{
            explorer.map((file) => {
                if(file.EsCarpeta){
                const Expandido = expandedFolders.includes(file.id);
                return(<>
                   <div>
                       <span className="Cont-folder" onClick={() => CambiarExpan(file.id)}>📂 {file.name}  
                        <div className="Close_Contr" onClick={() => { HandleCloseds(file.name); console.log(Closed); HandleeClick() }}>
                            Cerrar contratacion

                            <Añadir cerrado={ceerrado} HandleClick={HandleeClick}/>
                        </div>
                       </span>
                   </div>
    
                   <div style={{display: Expandido ? "block" : "none"}}>
                        <Folder explorer={file.items}/>         
                   </div>
                </> 
                );
                }
                if (!file.EsCarpeta){
                    const rutaarchivo = path.join(process.cwd(), file.path)
                    console.log(rutaarchivo) 
                    console.log("archi");
                    return <span className="file" onClick={() => ShowFile(file.path, file.name)}> 
                        📄 {file.name}
                               <span className='icon' onClick={() => DownloadFile(file.path, file.name)}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                 <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                 <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                 </svg>
                               </span>
                        </span>
    
                        
                }
              })
        }
        </div>
    )
      }
      else{
        throw new Error ("Debe existir un contexto") 
      }

}


export default Folder;