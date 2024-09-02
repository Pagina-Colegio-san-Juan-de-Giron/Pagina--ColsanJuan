
'use client'
import React from 'react'
import Image from 'next/image'
import "./Contralor.scss"
import { Alice } from 'next/font/google';
import escudo from "@/app/Componentes/Imágenes/Escudo.svg";
import ImagenLado from "./Imagenes/fotoIDK.jpg"


const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


interface ArregloDatos  {
  ImageRoute: string,
  id: number,
  Nombre: string,
  Jornada: string

}

const GetURl = (img: string) => {
  const images = require(`@/app/Personal/Contralor/Imagenes/${img}`)
  return images
}

const page = () => {

  
  const Json: ArregloDatos[] = [
    {
      id: 1,
      ImageRoute: "fotoIDK.jpg",
      Nombre: "1",
      Jornada: "Mañana"
  },
  {
      id: 2,
      ImageRoute: "fotoIDK.jpg",
      Nombre: "2",
      Jornada: "Mañana"
  },
  {
      id: 1,
      ImageRoute: "fotoIDK.jpg",
      Nombre: "3",
      Jornada: "Mañana"
  }
  ]




  return (
   <main> 
    <header className='Hhheader'>
      <h1 className={`h1 ${alice.className}`}>Contralor o Contralora</h1>
      <h2 className='h2'>CAPITULO VII. CONTRALOR ESCOLAR</h2>
    </header>
    <article>
    <div className='FotoLadodiv'>
      <div className='text'>
      <p className='intro'>
        Será el encargado de promover y actuar como veedor del buen uso de los recursos y de los bienes públicos de la institución educativa a la cual pertenece, como mecanismo de control social en la gestión educativa y de espacio de participación de los estudiantes, con el fin de fomentar la transparencia en el manejo de los recursos públicos
      </p>

      <p>
        <h2>Artículo 41. Funciones del Contralor Escolar</h2> <br/>

        <div className='Sspan'> Liderar la Contraloría Escolar en la institución educativa que representa. </div><br/>

        <div className='Sspan'>  Ser vocero de la Contraloría Escolar ante la Comunidad Educativa.</div><br/>

        <div className='Sspan'>  Convocar a los integrantes de la Contraloría Escolar a una reunión ordinaria cada periodo académico dentro del calendario escolar, o extraordinaria cuando sea necesario.</div><br/>

        <div className='Sspan'> Solicitar a la Contraloría Municipal las capacitaciones que estime necesarias para el adecuado desarrollo de las funciones que corresponden a la Contraloría Escolar.<br/></div>

        <div className='Sspan'> Establecer con el acompañamiento de la secretaría de educación municipal o la autoridad escolar designada por el rector de la institución educativa, mediante documento técnico, las normas de audite pedagógico de contratos o programas que sean ejecutados en el ambiente escolar.<br/></div>

        <div className='Sspan'> Someter a aprobación de la Contraloría el documento técnico que contiene las normas de audite pedagógico que se establezcan con las autoridades mencionadas en el numeral anterior.<br/></div>
        
      </p>
      </div>

      <Image className='imagenLado' src={ImagenLado} alt='idk'/>
    </div> 
      <p>
        <h2>Artículo 42. Requisitos</h2>
         <div className='fondoazul'>
          <div className='Sspan'>Ser estudiante debidamente matriculado y activo en la institución educativa a la que servirá.<br/></div>
          <div className='Sspan'>Estar cursando el grado décimo o undécimo del nivel de educación media. <br/></div>
          <div className='Sspan'>Presentar Plan de Trabajo como Contralor Escolar, para el año de elección. <br/></div>
         </div>
      </p>

      <p>
        <h2>Artículo 43. Elección y período</h2>
        La Contralor será elegida por votación popular democrática, en las que participen las estudiantes del plantel debidamente matriculadas y activas. La Contralor será elegida por un período fijo de un año, el mismo día de las elecciones para Personero Estudiantil, siguiendo lo dispuesto en el artículo 28 del Decreto 1860 de 1994. Para tal efecto la Rectora en coordinación con el Comité del Área de Sociales convocará a todos las estudiantes matriculadas y activas con el fin de elegirlo por el sistema de mayoría simple y mediante voto universal y secreto. 

        
      </p>

      <section>
        <h2 className={` Hist ${alice.className}`}>Histórico</h2>

        <div className='Photo-Container'>

          <section className='Escudo-container'>
            <Image className='Escudoo' src={escudo} alt='escudo'/>
          </section>


          <section className='Photos'>
              { Json ?
                Json.map((data) => (
                  <div className= 'containerPersonero' key={data.id}>
                    <Image className='fotoPers' src={GetURl(data.ImageRoute)} width="100" height="100" alt="foto personero"/>

                    <h2 className='nombrePers'>{data.Nombre}</h2>
                    <h2 className='jornadaPers'>{data.Jornada}</h2>
                  </div>
                ))

                :
                <div>No hay personeros</div>
              }
          </section>


        </div>

      </section>

    </article>
   </main> 
  )
}

export default page
