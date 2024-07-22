'use client'

import React, {useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Contratacion.scss"
import Overlay from "./Componentes/modal"
import ClosedsContext from '../Context/ClosedsContext'

const page = () => {

  interface Licitaciones {
    name: string
    id: number
    items: []
    EsCarpeta: boolean
    path: string
  }

  const [Finished, setFinished] = useState<boolean>(false)
  const [Estadocerrados, setCerrados] = useState<boolean[]>([])
  const HandleClick = (índice: number) => {
      setCerrados(prevState => {
        const Nuevosestados = [...prevState]
        Nuevosestados[índice] = !Nuevosestados[índice]
        return Nuevosestados
      });
  }

  const [Licitaciones, setLic] = useState<Licitaciones[]>([])

  async function ObtenerLic(){
    const response = await fetch('/api/Secretaria');
      const data = await response.json();
      console.log(data);
      if(data) {
        const ResetArray = Array(data.length).fill(true)
        setLic(data);
        setCerrados(ResetArray)
      } 
  }



  useEffect(() => {
    ObtenerLic()
  }, [])


  const ClosedContext = useContext(ClosedsContext)

  if(!ClosedContext){
    throw new Error ("CONTEXTO NECESARIO")
  }

  const {Closed} = ClosedContext 

  const ObtenerValoresIniciales = (lic: Licitaciones) => {
      let InitialFileName = ""
      let InitialFolderPath = lic.path

      lic.items.forEach((element: Licitaciones) => {
        if(!element.EsCarpeta)
        {
          InitialFileName = element.name
        }
      })

      return {InitialFolderPath, InitialFileName}
  }

  return (
   <main> 
    <section className='contenedor-contratacion'>{

    Licitaciones.map((lic) => {
      const {InitialFolderPath, InitialFileName} = ObtenerValoresIniciales(lic);
      let index = lic.id
      return (<>
        <span className='boton-contratacion' onClick={() => {HandleClick(index); console.log(Closed)}}>
          {lic.name}
        </span>

        <Overlay FolderPath={InitialFolderPath} InitFilename={InitialFileName} Name={lic.name} Finished={Finished}  cerrado={Estadocerrados[index]} HandleClick={() => HandleClick(index)}/>
      </>
      )
    })
      

    }   
    </section>

    
   </main> 
  )
}

export default page
