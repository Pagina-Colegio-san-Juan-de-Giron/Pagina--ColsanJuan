'use client'

import "./PaginaPrincipal.scss"
import Slider from "./Componentes/carousel"
import Slider2 from "./Componentes/carousel_manual"
import Video from "./Componentes/VideoYT"
import { useState, useEffect } from "react";
import { Alice } from 'next/font/google';

import React from 'react'

        
const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


export default function Home() {

  
  const [images, setimages] = useState(["IMG-20230929-WA0048.jpg"]);
  const [imagesNoti, setimagesNoti] = useState(["juanchos.jpg"]);


  


  useEffect(() => {
    async function obtenerImagenes() {
        const response = await fetch('/api/Slider');
        const data = await response.json();
        setimages(data.filenames);
        console.log(images)

    }

    async function obtenerImagenesNoticias() {
      const response = await fetch('/api/Slider/Noticias');
      const data = await response.json();
      setimagesNoti(data.filenames);
      console.log(imagesNoti)

    }

    obtenerImagenes();
    obtenerImagenesNoticias();
  }, []);

  const leer = () => {
    console.log(images)
  }


  leer();
  return (
    <section className="container-pagina">
      <Slider images={images} ></Slider>
        <article>
          <div className="Container-BotonesPrincipales">
              <a href="https://q.plataformaintegra.net/colsanjuangiron/#" className={alice.className}>
                  Plataforma de notas
              </a>

              <a href="" className={alice.className}>
                  Manual de convivencia
              </a>
          </div>


          <Slider2 images={imagesNoti}/>
        </article>
        <Video/>
    </section>
  )

}
