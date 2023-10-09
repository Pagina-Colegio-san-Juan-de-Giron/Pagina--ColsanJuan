'use client'

import "./PaginaPrincipal.css"
import Slider from "./Componentes/carousel"
import { useState, useEffect } from "react";
import { get } from "http";
import useSWR from 'swr';

        



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
    <div className="container-pagina">
      <Slider images={images} AutoPlay={true}></Slider>
    </div>
  )

}
