'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Secretaria.scss"
import Overlay from "./Modal/modal"
import Añadir from "./ModalA/page"
import { Alice } from 'next/font/google'

interface Licitaciones {
  name: string
}

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const page: React.FC = () => {

  const [cerrado, setcerrado] = useState(true)
  const [ceerrado, setceerrado] = useState(true)
  const [Licitaciones, setLic] = useState<Licitaciones[]>([])

  const HandleClick = () => {
      setcerrado(!cerrado);
  }

  const HandleeClick = () => {
    setceerrado(!ceerrado);
  }

  let NombreActual: string = ""

  async function ObtenerLic(){
    const response = await fetch('/api/Secretaria');
      const data = await response.json();
      console.log(data);
      if(data) {
        setLic(data);
      } 
  }

  useEffect(() => {
    ObtenerLic()
  }, [])

  return (
   <main> 

    <div className={`${alice.className} Boton-CrearLic`} onClick={() => {setceerrado(false)}}>
          Crear nueva licitación 

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
          </svg>

    </div>

    

    <Añadir Nombre={NombreActual} cerrado={ceerrado} HandleClick={HandleeClick}/>

    <section className='contenedor-contratacion'>
          <span className={`${alice.className} boton-contratacion`} onClick={HandleClick}>
            Administrar licitaciones
          </span>
    </section>

    <Overlay Nombre={NombreActual} cerrado={cerrado} HandleClick={HandleClick}/>
   </main> 
  )
}

export default page
