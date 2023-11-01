'use client'

import "./PaginaPrincipal.css"
import Slider from "./Componentes/carousel"
import Video from "./Componentes/VideoYT"
import Image from "next/image"
import Stonk from "./Componentes/Imágenes/trend-up-svgrepo-com.svg"
import Uno from "./Componentes/Imágenes/number-one-bold-svgrepo-com.svg"
import Bombilla from "./Componentes/Imágenes/lightbulb-on-svgrepo-com.svg"
import { useState, useEffect } from "react";
import { Alice } from 'next/font/google'
import juanchos from "./Componentes/Imágenes/juanchos.jpg"

        
const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


export default function Home() {

  
  const [images, setimages] = useState(["IMG-20230929-WA0048.jpg"]);

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
      <Slider images={images} ></Slider>
      <article>
          <h1 className={alice.className}>Somos el Colegio san Juan de Girón</h1>
          <div className="container-articulo">
            <Image src={juanchos} alt="juanchos"/>
            <div className="logros">
                <span>
                  <h2>Uno de los mejores<br/> ICFES del año 2022</h2>
                  <div className="Icono">
                    <Image src={Stonk} alt="Icono-barra"/>
                  </div>
                </span>
                <span>
                  <h2>Uno de los primeros<br/> colegios de Girón</h2>
                  <div className="Icono">
                   <Image src={Uno} alt="Icono-uno"/>
                  </div>
                </span>
                <span>
                  <h2>Certificados en<br/> potecial y creatividad  </h2>
                  <div className="Icono">
                    <Image src={Bombilla} alt="Icono-bombilla"/>
                  </div>
                </span>
            </div>
          </div>
        </article>
        <Video/>
    </section>
  )

}
