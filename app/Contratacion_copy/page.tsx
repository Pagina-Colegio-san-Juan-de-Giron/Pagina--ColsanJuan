'use client'

import React, {useState, useEffect} from 'react'
import "./Contratacion.scss"
import Link from "next/link";

const Page = () => {
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


  const [Licitaciones, setLic] = useState<Licitaciones[]>([])


  


  useEffect(() => {

    

    async function ObtenerLic(){
      const response = await fetch('/api/Secretaria/Clases');
        const data = await response.json();
        console.log(data);
        if(data) {
         

          
          
          setLic(data);

          const FullFalse = Array(data.length).fill(false)
          setCerrados(FullFalse)
          console.log("Arreglo nuevo ", Estadocerrados, "Estado buscado ", FullFalse)
          setFinished(true)
      
          
          
          
          
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
    
      let data
      try{
        const response = await fetch('/api/Secretaria/Fechas/Consultar');
        data = await response.json();
      }
      catch(err){
        console.log("error en la llamada a la api", err)
        return null;
      }

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


  



  return (
   <main> 
    <section className='contenedor-contratacion'>{

    Licitaciones.map((lic) => {

      

      

      return (<React.Fragment key={lic.id}>
        <Link className='boton-contratacion' href={`Contratacion_copy/Clases_contrataciones/${lic.name}?contract=${lic.name}`}>
          {lic.name}
        </Link>

        

      </React.Fragment>
      )
    })
      

    }   
    </section>

    
   </main> 
  )
}

export default Page
