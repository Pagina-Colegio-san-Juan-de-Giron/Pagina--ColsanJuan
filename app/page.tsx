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

  
  const [images, setimages] = useState(["IMG_20250513_123026.jpg"]);
  const [imagesNoti, setimagesNoti] = useState(["juanchos.jpg"]);
  const [CardOpen, setCards] = useState<boolean[]>(Array(8).fill(false))

  const ToggleCardOpen = (indicem: number) => {
    setCards((prevStates) => prevStates.map((state, i) => (i === indicem ? !state : state)))
  }

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
                PLATAFORMA
              </a>

              <a className={`${alice.className} blue`} onClick={ShowFile}>
                MANUAL DE CONVIVENCIA
              </a>

              <a href="/Contratacion" target="_blank" className={`${alice.className} green`}>
                CONTRATACIÓN
              </a>
          </div>

          <section className="gridInfo">
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={0}>Titulo Area</span>
                <span className={`${CardOpen[0] ? '' : 'openn'} Card-content`}>example para ver si se da el wrap aca en este coso esperando que aun sirva</span>
                <span className={`${CardOpen[0] ? '' : 'openB'} Button-card`} onClick={() => ToggleCardOpen(0)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={1}>Titulo Area</span>
                <span className={`${CardOpen[1] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[1] ? '' : 'openB'} Button-card`} onClick={() => ToggleCardOpen(1)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={2}>Titulo Area</span>
                <span className={`${CardOpen[2] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[2] ? '' : 'openB'} Button-card`} onClick={() => ToggleCardOpen(2)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={3}>Titulo Area</span>
                <span className={`${CardOpen[3] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[3] ? '' : 'openB'} Button-card`} onClick={() => ToggleCardOpen(3)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={4}>Titulo Area</span>
                <span className={`${CardOpen[4] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[4] ? '' : 'openB'} Button-card`}onClick={() => ToggleCardOpen(4)}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={5}>Titulo Area</span>
                <span className={`${CardOpen[5] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[5] ? '' : 'openB'} Button-card`} onClick={() => ToggleCardOpen(5)}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={6}>Titulo Area</span>
                <span className={`${CardOpen[6] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[6] ? '' : 'openB'} Button-card`}  onClick={() => ToggleCardOpen(6)}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
              </div>
              <div className='card'>
                <span className={`${alice.className} Card-title`} key={7}>Titulo Area</span>
                <span className={`${CardOpen[7] ? '' : 'openn'} Card-content`}>example</span>
                <span className={`${CardOpen[7] ? '' : 'openB'} Button-card`}  onClick={() => ToggleCardOpen(7)}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
              </div>
          </section>

          <h2 className={`${alice.className} Noticias-title`}>NOTICIAS</h2>

          <Slider2 images={imagesNoti}/>       
        </article>
        <Video/>
    </section>
  )

}
