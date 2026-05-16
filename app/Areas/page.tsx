"use client"
import React, { useState } from "react"
import Image from "next/image"
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Developing.scss"
import { px } from "framer-motion"
import Link from "next/link"

const materias = [
  "Inglés",
  "Español",
  "Ética",
  "Religión",
  "Biología",
  "Educación Física",
  "Matemáticas",
  "Sociales",
  "Informática",
  "Artística",
  "Comportamiento"
]

const Page = () => {
  
  return (
    <main className="main-container">
      <div className="header">
        <Image src={imagen} alt="En construccion" width={80} height={80} className="logo" />
        <h1 id="elh1">Áreas Académicas</h1>
      </div>
   
     <Link href="/Areas/Informatica" >
          Informática
        </Link>
      
     
            
    </main>
  )
}

export default Page
