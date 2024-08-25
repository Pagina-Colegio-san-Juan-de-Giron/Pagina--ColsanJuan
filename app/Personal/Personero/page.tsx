'use client'
import React from 'react'
import Image from 'next/image'
import "./Personero.scss"
import { Alice } from 'next/font/google';
import escudo from "@/app/Componentes/Imágenes/Escudo.svg";
import ImagenLado from "./Imágenes/fotoIDK.jpg"

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
  const images = require(`@/app/Personal/Personero/Imágenes/${img}`)
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
      <h1 className={`h1 ${alice.className}`}>Personero o Personera</h1>
      <h2 className='h2'>CAPITULO VI. PERSONERO(A) DE LOS ESTUDIANTES</h2>
    </header>
    <article>
    <div className='FotoLadodiv'>
      <div className='text'>
      <p className='intro'>
        Es un líder juvenil con la capacidad de generar participación en la
        Comunidad Estudiantil, de descubrir y trabajar las necesidades del grupo al que representa, de defenderlos derechos humanos y promueve la cultura democrática, de velar porque la comunicación entre estudiantes, maestros, padres de familia y demás integrantes de la Comunidad Educativa sea abierta, clara, sencilla y respetuosa.
      </p>

      <p>
        <h2>Artículo 28. Objetivos</h2> <br/>
         El trabajo del Personero Estudiantil está encaminado a la promoción y el cumplimiento de los Derechos y Deberes de los estudiantes, además de:<br/>
        <br/>
        <div className='Sspan'> Plantear quejas e inquietudes ante las distintas instancias de los Colegios.</div><br/>

        <div className='Sspan'> Utilizar de manera responsable herramientas de interacción, para promover las diferentes

        actividades que se realicen dentro de la Institución Educativa.</div><br/>

        <div className='Sspan'> Servir de garantes del cumplimiento de la normatividad en los procesos disciplinarios.</div><br/>

        <div className='Sspan'> Ser promotor de paz y convivencia.<br/></div>
        
      </p>
      </div>

      <Image className='imagenLado' src={ImagenLado} alt='idk'/>
    </div> 
      <p>
        <h2>Artículo 29. Cualidades del personero.</h2>
          <div className='fondoazul'>
            Debe representar el perfil del estudiante Juanista, Ser ante todo responsable y dar ejemplo en lo académico y disciplinario, tener iniciativa para desarrollar proyectos que busquen el bienestar de los estudiantes, siempre y cuando se encuentren amparados por la norma y estén al alcance en su cargo.
          </div>
      </p>

      <p>
        <h2>Artículo 30. Requisitos</h2>
        

         <div className='Sspan'> Ser estudiante de último grado que ofrezca el Plantel Educativo.</div><br/>

         <div className='Sspan'> Entregar un plan de trabajo al registrador escolar en los tiempos previstos y exponerlo ante los estudiantes.</div><br/>

         <div className='Sspan'> Haber estudiado mínimo dos años en la institución.</div><br/>

         <div className='Sspan'> Haber aprobado con calificaciones en nivel alto o superior el año anterior.</div><br/>

         <div className='Sspan'> No haber recibido sanciones por faltas graves, los dos años anteriores a la postulación.</div><br/>

      </p>

      <section>
        <h2 className={` Hist ${alice.className}`}>Histórico</h2>

        <div className='Photo-Container'>

          <section className='Escudo-container'>
            <Image className='Escudoo' src={escudo} alt='escudo'/>
          </section>
          <section className='Photos'>
              {
                Json.map(data => (
                  <div className= 'containerPersonero' key={data.id}>
                    <Image className='fotoPers' src={GetURl(data.ImageRoute)} alt="foto personero"/>
                    <h2 className='nombrePers'>{data.Nombre}</h2>
                    <h2 className='jornadaPers'>{data.Jornada}</h2>
                  </div>
                ))
              }
          </section>


        </div>

      </section>

    </article>
   </main> 
  )
}

export default page
