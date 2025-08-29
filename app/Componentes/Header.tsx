'use client'

import "./scss/Header.css";
import Image from 'next/image';
import React from "react";
import escudo from "./Imágenes/Escudo.svg";
import { Alice } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const pacifico = Dancing_Script({ 
  subsets: ['latin-ext'],
  weight: ['500']
})

const Header = () => {
  return (
     
      <header className="Header">

            <div className="container-header">

                <span className="Escudo"><Image className="imagen" src={escudo} alt="Escudo" height={100}/></span>

                    <div className="NombreColegio" >

                      <div className="contenedor-letras">
                          <span className={`${alice.className} Texto`}>Colegio</span>
                          <span className={`${alice.className} TextoMedio`}>SAN JUAN</span>
                          <span className={`${alice.className} Texto`}>De Girón</span>
                      </div>

                    </div>

                    <div className="cuarentayocho">
                      <div className="container-num">
                          <span className="numero"><span className={pacifico.className}>48</span></span>
                      </div>
                    </div>

                    <div className="Lema-Años">
                      <div className="container-lema">
                          <span className="años"><span className={pacifico.className}>años</span></span>
                          <span className="pacifico"><span className={pacifico.className}>Educando mente y corazón</span></span>
                      </div>
                    </div>
                  
            </div>

      </header>
    )
  }

  export default Header