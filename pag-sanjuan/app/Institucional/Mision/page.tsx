import React from 'react'
import { Alice } from 'next/font/google'
import "./Mision.scss"

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
}) 

const Mision = () => {
  return (
    <main>
      <header className={alice.className}>
        <div className='container-hheader'>
          <span className='span'/>
            MISIÓN DEL COLEGIO<br/> 
            SAN JUAN DE GIRÓN
        </div>
      </header>

      <article className='section'>
          <h1 className='h1'>CAPÍTULO II. MISIÓN, VISIÓN Y FACTORES CLAVES DE ÉXITO</h1>
          <h2>Artículo 4. Misión</h2>
           
          <p>
            El Colegio San Juan de Girón, es una Institución de carácter oficial, con
            modalidad académica, que ofrece una formación integral en procesos humanísticos y
            tecnológicos, orientados a educar mente y corazón, para formar ciudadanos competitivos
            capaces de construir y direccionar su propio proyecto de vida.
          </p>

          <h2 className='info'>LA INFORMACION FUE SACADA DEL MANUAL DE CONVIVENCIA DE LA INSTITUCIÓN</h2>
      </article>
        
    </main>
  )
}

export default Mision
