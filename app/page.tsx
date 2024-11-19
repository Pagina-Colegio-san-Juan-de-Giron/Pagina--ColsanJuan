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


  const ShowFile = async () => {
    const Filepath = "app/Componentes/PDF/manual_de_convivencia.pdf"
    console.log("RUTAAAA : ", Filepath )
    console.log("CWDD : ", process.cwd)
    const filename = "manual_de_convivencia.pdf"
  
    try{
        const res = await fetch(`/api/Secretaria/Preview?Filepath=${Filepath}&Filename=${filename}`)
        const blob = await res.blob();

        const DisposicionContenido = res.headers.get('Content-disposition');
        if(DisposicionContenido){
            const url = window.URL.createObjectURL(blob)
            const PestañaPrev = window.open(url, '_blank');
            if (PestañaPrev) {
                PestañaPrev.onload = () => {
                window.URL.revokeObjectURL(url);
            };
        }
        else{
            console.error("Fallo al previsualizar");
        }
        }

        
    }
    catch(err){
        console.error("Error descargando:", err);
    }
  }


  useEffect(() => {
    async function obtenerImagenes() {
        const response = await fetch('/api/Slider');
        const data = await response.json();
        setimages(data.filenames);
        console.log(images)

    }


    async function obtenerImagenesNoticias() {
      try{
        const response = await fetch('/api/Slider/Noticias');
        const data = await response.json();
        setimagesNoti(data.filenames);
        console.log("Imagenes de notificaciones", data.filenames,"Holii", imagesNoti)
      }catch(err){
        console.log("Error noti: ", err)
      }
      
      

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
              <a href="https://q.plataformaintegra.net/colsanjuangiron/#" rel="noreferrer noopener" target="_blank" className={`${alice.className} yellow`}>
                  Plataforma de notas
              </a>

              <a className={`${alice.className} blue`} onClick={ShowFile}>
                  Manual de convivencia
              </a>

              <a href="/Contratacion" target="_blank" className={`${alice.className} green`}>
                  Contratacion
              </a>
          </div>

          <section className="gridInfo">
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
              <div className="card">
                <span className={alice.className}>Titulo Area</span>
                blalbalbalbalbalbal
              </div>
          </section>

          <Slider2 images={imagesNoti}/>
        </article>
        <Video/>
    </section>
  )

}
