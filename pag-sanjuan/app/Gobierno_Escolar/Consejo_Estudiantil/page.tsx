import React from 'react'
import Image from 'next/image'
import imagen from "./gray-color-solid-background-1920x1080.png"
import { Alice } from 'next/font/google';
import "./Consejo_Estudiantil.scss"

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const page = () => {
  return (
   <main>

    <header><h1 className={alice.className}>CONSEJO DE LOS ESTUDIANTES</h1></header>

    <article>
      <h2>DEFINICION DEL CONSEJO ESTUDIANTIL</h2>
      <p>
        Es el máximo órgano colegiado que asegura y garantiza el continuo ejercicio de la participación por parte de los educandos. Está integrado por un vocero de cada uno de los grados ofrecidos por el establecimiento. Los alumnos del nivel preescolar y de los tres primeros grados del ciclo de primaria, serán convocados a una asamblea conjunta para elegir un vocero único entre los estudiantes que cursan el tercer grado.
      </p>

      <h2>CORRESPONDE AL CONSEJO ESTUDIANTIL</h2>
      <div className='parrafo-imagen-container'>
        <div className='Parrafo'>
          • Darse su propia organización interna.<br/>
          • Elegir el representante de los estudiantes ante el Consejo Directivo.<br/> 
          • Invitar a sus deliberaciones a aquellos estudiantes que presenten iniciativas sobre el desarrollo de la vida estudiantil y aquellas que le atribuya el manual de convivencia.<br/>
        </div>
        <Image src={imagen} alt='imagen'/>
      </div>
    </article>
   </main> 
  )
}

export default page
