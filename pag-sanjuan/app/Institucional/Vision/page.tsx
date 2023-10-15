import React from 'react'
import { Alice } from 'next/font/google'
import "./Vision.scss"

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
            VISIÓN DEL COLEGIO<br/> 
            SAN JUAN DE GIRÓN
        </div>
      </header>

      <article className='section'>
          <h1 className='h1'>CAPÍTULO II. MISIÓN, VISIÓN Y FACTORES CLAVES DE ÉXITO</h1>
          <h2>Artículo 5. Visión</h2>
           
          <p>
            Al 2026 EL COLEGIO SAN JUAN DE GIRÓN 
            habrá consolidado una formación de ciudadanos críticos, con valores éticos y humanísticos, capaces de vivir en
            armonía con el medio ambiente, fortaleciendo la apropiación de una segunda lengua, las
            expresiones artísticas y el desarrollo de competencias tecnológicas.
          </p>

          <h2 className='info'>LA INFORMACION FUE SACADA DEL MANUAL DE CONVIVENCIA DE LA INSTITUCIÓN</h2>
      </article>
        
    </main>
  )
}

export default Mision
