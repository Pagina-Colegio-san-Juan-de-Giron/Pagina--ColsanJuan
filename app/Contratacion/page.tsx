'use client'

import React, {useState, useEffect} from 'react'
import "./Contratacion.scss"
import Overlay from "./Componentes/modal"

const Page = () => {
  interface ExplorerItem {
    id: number;
    EsCarpeta: boolean;
    name: string;
    items: ExplorerItem[];
    path: string;
}
  interface Licitaciones {
    name: string
    id: number
    items: Licitaciones[]
    EsCarpeta: boolean
    path: string
  }



  interface RegistrosFechas {
    id: number,
    Fecha: string,
    Nombre: string
  }

  const [Finished, setFinished] = useState<boolean>(false)
  const [Estadocerrados, setCerrados] = useState<boolean[]>([])
  const [Closed, setClosed] = useState<string[]>([""])
  const [FechasCierre, setFechasCierre] = useState<Record<string, Date>>({})

  const isClosed = (Foldername: string) => {
    if(Closed?.includes(Foldername)){
        return true
    }
    else{
        return false
    }

}

const HandleCloseds = (Foldername: string) => {
    setClosed((prev) => {
        const newarray = [...prev, Foldername]
        return newarray
    });
}    
  
  const HandleClick = (índice: number) => {
      setCerrados(prevState => {
        const Nuevosestados = [...prevState]
        Nuevosestados[índice] = !Nuevosestados[índice]
        return Nuevosestados
      });
  }

  const [Licitaciones, setLic] = useState<Licitaciones[]>([])


  


  useEffect(() => {

    

    async function ObtenerLic(){
      const response = await fetch('/api/Secretaria');
        const data = await response.json();
        console.log(data);
        const fecha: Record<string, Date> = {}
        if(data) {
         

          
          
          setLic(data);

          const FullFalse = Array(data.length).fill(false)
          setCerrados(FullFalse)
          console.log("Arreglo nuevo ", Estadocerrados, "Estado buscado ", FullFalse)
      
          
          
          
          
        } 
        
    }

    ObtenerLic()
    
  }, [])

  useEffect(() => {
    ObtenerFechaCierre()
  }, [])

  useEffect(() => {
    Licitaciones.map((lic) => {
      const FechaCierreLic = FechasCierre[lic.name]
      const FechaActual = new Date()
      if(FechaActual > FechaCierreLic){
        HandleCloseds(lic.name)
      }
    })
  }, [Licitaciones, FechasCierre])

  const ObtenerFechaCierre = async() => {
    
      
      try{
        const response = await fetch('/api/Secretaria/Fechas/Consultar');
        const data = await response.json();
  
        if(data){
          console.log("LA fecha essss: ", data.registro)
          const fechaMap: Record<string, Date> = {} 
          await Promise.all(data.registro.map((registro: RegistrosFechas) => {
            fechaMap[registro.Nombre] = new Date(registro.Fecha)
          }))
          setFechasCierre(fechaMap)
          console.log("pureba registros: ", FechasCierre)
        }else{
          console.log("No hay registro esperado")
          return null
        }
      }
      catch(err){
        console.log("error en la llamada a la api", err)
        return null;
      }

  }


  const ObtenerValoresIniciales = (lic: Licitaciones) => {
      let Downloads: Licitaciones[] = [] 
      lic.items.forEach((element: Licitaciones) => {
        if(!element.EsCarpeta)
        {
          Downloads = [...Downloads, element]
        }
      })

      return {Downloads}
  }



  return (
   <main> 
    <section className='contenedor-contratacion'>{

    Licitaciones.map((lic) => {

      
      const index = lic.id
      const InitialPath = lic.path
      const {Downloads} = ObtenerValoresIniciales(lic) 

      

      return (<>
        <span className='boton-contratacion' onClick={() => {HandleClick(index);}}>
          {lic.name}
        </span>

        <Overlay isClosed={isClosed} FolderPath={InitialPath} InitFilename={Downloads} Name={lic.name} Finished={Finished}  cerrado={Estadocerrados[index]} HandleClick={() => HandleClick(index)}/>

      </>
      )
    })
      

    }   
    </section>

    
   </main> 
  )
}

export default Page
