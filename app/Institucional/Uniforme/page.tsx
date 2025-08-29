import React from 'react'
import "./Uniformes.scss"
import Image from 'next/image'
import { Alice } from 'next/font/google'
import edfisica from './Imágenes/Ed_física.jpg'
import diario_hombre from './Imágenes/Diario_hombre.jpg'
import diario_mujer from './Imágenes/Diario_mujer.jpg'


const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


const Uniformes = () => {
  return (
    <main>
        <header className='header'>
            <p className='parrafo-inicio'> 
                Los uniformes que ha establecido el Colegio San Juan de Girón para
                el desarrollo de sus actividades institucionales son:
            </p>
        </header>

        <section className='container-info'>

            <article className='articulo'>
                <div className='container-descrip'>
                    <h1 className={alice.className}>Uniforme de edu. física</h1>
                    <div className='text'>
                      <p>
                        Camiseta tipo polo blanca, con cuello y puños tejidos de color azul oscuro, con vivos blanco
                        y botones de presión; lleva franjas de color azul   oscuro en los costados y el escudo del
                        colegio bordado en el lado derecho del pecho<br/>
                        <br/>
                      </p>

                      <p>
                        Sudadera de color azul oscuro, con bota recta (nunca con bota entubada), vivos de color rojo a los lados y el nombre COLSANJUAN bordado en la mangaizquierda, con letras blancas.
                      </p>  
                    </div>
                </div>
                
                <div className='container-image'>
                  <h2 className={alice.className}>Unisex</h2>
                  <Image src={edfisica} alt='U_edfísica'/>
                </div>
                              
            </article>

            <article className='articulo'>
                <div className='container-descrip'>
                    <h1 className={alice.className}>Uniforme de diario</h1>  
                    <div className='text'>
                      <p>
                        Camisa tipo guayabera de color azul claro, con detalles lineales en sentido vertical, que lleva cuello camisero, botones, manga corta, un bolsillo a cada lado en la parte inferior y el escudo del colegio bordado en la parte derecha del
                        pecho<br/>
                        <br/>
                      </p>

                      <p>
                        El pantalón es en gabardina de color azul oscuro, de bota recta (nunca con bota
                        entubada) confeccionado con dos bolsillos, uno a cada lado, se porta con correa
                        clásica de color negro
                      </p>
                    </div>    
                </div>
                
                <div className='container-image'> 
                  <h2 className={alice.className}>Varones</h2>
                  <Image src={diario_hombre} alt='U_diarioH'/>
                </div>
                
            </article>

            <article className='articulo'>
                <div className='container-descrip'>
                    <div className='mujerP'>
                      <p>
                        Jardinera en tela de fondo azul oscuro y cuadros de color amarillo y rojo (según modelo), con pretina en la cintura en la misma tela, la parte superior delantera consta de dos solapas anchas desde la base del cuello hasta el hombro que se cruzan en el centro al llegar a la pretina y en la trasera escote redondo, quedando abierta a los lados. Lleva el escudo del colegio bordado al lado derecho del pecho, la falda tiene un pliegue ancho en el centro y dos pliegues a cada lado, el largo es hasta la mitad de la rodilla<br/>
                        <br/>
                      </p>

                      <p>
                        Blusa blanca con detalles lineales en sentido vertical, cuello bebé, manga muñeca y botones en la parte trasera, con embonos en el orillo del cuello y el puño de la manga, de la misma tela de la jardinera.
                      </p>  
                    </div>
                </div>
                
                <div className='container-image'>
                  <h2 className={alice.className}>Señoritas</h2>
                  <Image src={diario_mujer} alt='U_diarioM'/>
                </div>
                
            </article>

        </section>
    </main>
  )
}

export default Uniformes
