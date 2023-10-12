'use client'

import React from 'react'
import Image from 'next/image';
import "./Footer.css";
import escudo from "./Imágenes/Escudo.svg";
import { Alice } from 'next/font/google'
import telefono from "./Imágenes/phone-svgrepo-com.svg"
import mail from "./Imágenes/mail-alt-svgrepo-com.svg"
import marcador from "./Imágenes/map-point-svgrepo-com.svg"
import Mapa from "./mapa"

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const footer = () => {
  return (
    <footer className='Footer'>
        <div className='container-footer'>
                <div className='escudo'>
                  <Image className="Imagen" src={escudo} alt="Escudo" height={100}/>
                </div>
             <div className='paralema'>   
              <div className='columns'>
                <div className='Scol'>
                   <div className='contactanos'>
                    <Image className="Imagen cel" src={escudo} alt="Escudo" height={100}/>
                    <h1 className={alice.className}>Contáctanos</h1>
                   </div>
                     
                     <div className='contactos'>

                      <div className='numero'> 
                        <Image className="icono" src={telefono} alt="Escudo" height={50}/>
                        <h1 className={alice.className}>318 7689375</h1>
                      </div> 

                      <div className='correo'> 
                        <Image className="icono" src={mail} alt="Escudo" height={50}/>
                        <h1 className={alice.className}>paginacolsanjuandegiron@santander.edu.co</h1>
                      </div> 

                      <div className='ubicacion'> 
                        <Image className="icono" src={marcador} alt="Escudo" height={50}/>
                        <h1 className={alice.className}>Parque principal de Girón, parque Peralta, sede Corviandis</h1>
                      </div> 
                     </div>
                </div>

                <div className='mapa-contenedor'>
                  <Mapa/>
                </div>
              </div>
              <div className='lema'>
                      <h1 className={alice.className}>¡Creemos en la excelencia como el camino para lograr los sueños!</h1>
              </div> 
             </div>
            </div>
    </footer>
  )
}

export default footer


