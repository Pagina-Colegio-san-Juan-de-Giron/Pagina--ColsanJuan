'use client'

import path from "path";
import React, { useEffect, useState } from "react";

interface ExplorerItem {
    id: number;
    EsCarpeta: boolean;
    name: string;
    items: ExplorerItem[];
    path: string;
}



  

 
 



function Folder({ explorer , IsLic }: { explorer: ExplorerItem[] ; IsLic: boolean}) {

    const [expandedFolders, setExpandedFolders] = useState<number[]>([]);
    const [downloadStat, setDwnloadStat] = useState("");
    const [FechaCambiar, setFechaCambiar] = useState<string>("")
    const [NombreCambiar,setNombreCambiar] = useState<string>("")


  
    

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
                console.log(downloadStat)
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
    
            const DisposicionContenido = res.headers.get('Content-disposition');
            if(DisposicionContenido){
                const url = `/api/Secretaria/Preview?Filepath=${Filepath}&Filename=${filename}`
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


    useEffect(() => {
        const CambiarFecha = async () =>  {
            try{
                  if(NombreCambiar != ""){
                    const res = await fetch('/api/Secretaria/Fechas/Cambiar', {
                        method: "PUT",
                        body: JSON.stringify({
                            FechaNueva: FechaCambiar,
                            Nombre: NombreCambiar
                        })
                      })  
    
                      if (res?.ok){
                        console.log("Se cambio la fecha")
                      }else{
                        console.log("Fecha no cambiada")
                      }
                  }
            }
            catch(err)
            {
                console.log(err)
            }
        }

        CambiarFecha()
    },[FechaCambiar])

    const CambiarExpan = (id: number) => {
        setExpandedFolders(expandedFolders.includes(id)
            ? expandedFolders.filter(folderId => folderId !== id)
            : [...expandedFolders, id]);
    }

    if (!explorer) {
        return <div>Loading...</div>
      }

      console.log(explorer)

      const CerrarLic = async (Licname: string) => {
        const Resultado = confirm("¿Seguro que quiere cerrar esta licitacion? Presione OK si sí o Cancelar si no")

        if (Resultado === true ){
            try{
                const res = await fetch('/api/Secretaria/Borrar', {
                    method: "DELETE",
                    body: JSON.stringify({
                        name: Licname
                    })
                  })

                  if(res?.ok){
                    alert("archivo borrado")
                  }

            }catch(e){
                console.log("error al hacer peticion al servidor", e)
            }
        }
      }


        return (<div className="Folders-container">{
            explorer.map((file) => {
                if(file.EsCarpeta){
                const Expandido = expandedFolders.includes(file.id);
                return(<React.Fragment key={file.id}>

                   <div className="Lic-Cont">
                       <span className="Cont-folder" onClick={() => CambiarExpan(file.id)}>📂 {file.name}</span>
                       {
                            IsLic ?
                            <div className="cont-lic">
                                <input type="datetime-local" value={FechaCambiar} onChange={(e) => {setFechaCambiar(e.target.value); setNombreCambiar(file.name)}} />
                                <span className='boton-cerrarLic' onClick={() => CerrarLic(file.name)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                    </svg>
                                </span>

                            </div>
                            :

                            <span className="nothing"></span>
                        }
                   </div>
    
       <div style={{display: Expandido ? "block" : "none"}}>
                        <Folder explorer={file.items} IsLic={false} />         

                   </div>
                </React.Fragment> 
                );
                }
                if (!file.EsCarpeta){
                    const rutaarchivo = path.join(process.cwd(), file.path)
                    console.log(rutaarchivo) 
                    console.log("archi");
                    return <span className="file" key={file.id} onClick={() => ShowFile(file.path, file.name)}> 
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


export default Folder;