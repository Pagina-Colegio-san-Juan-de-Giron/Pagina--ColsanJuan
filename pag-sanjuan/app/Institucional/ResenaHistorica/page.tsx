import React from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Developing.scss"

const page = () => {
  return (
   <main> 
    <div>
      En desarrollo
    </div>
    <Image className="image" src={imagen} alt='developing'/>
   </main> 
  )
}

export default page
