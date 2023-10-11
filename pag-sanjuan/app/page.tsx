'use client'

import "./PaginaPrincipal.css"
import Slider from "./Componentes/carousel"
import Video from "./Componentes/VideoYT"
import Image from "next/image"
import { useState, useEffect } from "react";
import { Alice } from 'next/font/google'
import juanchos from "./Componentes/Imágenes/juanchos.jpg"

        
const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


export default function Home() {

  
  const [images, setimages] = useState(["3.png"]);

  useEffect(() => {
    async function obtenerImagenes() {
        const response = await fetch('/api/Slider');
        const data = await response.json();
        setimages(data.filenames);
        console.log(images)
        console.log(data.filenames)
    }

    obtenerImagenes();
  }, []);

  const leer = () => {
    console.log(images)
  }


  leer();
  return (
    <section className="container-pagina">
      <Slider images={images} AutoPlay={true}></Slider>
        <article>
          <h1 className={alice.className}>Somos el Colegio san Juan de Girón</h1>
          <div className="container-articulo">
              <Image classname="juanchos" src={juanchos} alt="juanchos"/>
          </div>

        </article>
      <Video/>
    </section>
  )

}
