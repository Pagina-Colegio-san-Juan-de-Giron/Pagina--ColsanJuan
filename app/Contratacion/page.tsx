'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Contratacion.scss"
import Overlay from "./Componentes/modal"

const page = () => {

  const [cerrado, setcerrado] = useState(true)
  const HandleClick = () => {
      setcerrado(!cerrado);
  }

  return (
   <main> 
    <section className='contenedor-contratacion'>
      <span className='boton-contratacion' onClick={HandleClick}>

      </span>
      
      <span className='boton-contratacion' onClick={HandleClick}>
        
      </span>
      
      <span className='boton-contratacion' onClick={HandleClick}>

      </span>

    </section>

    <Overlay cerrado={cerrado} HandleClick={HandleClick}/>
   </main> 
  )
}

export default page
