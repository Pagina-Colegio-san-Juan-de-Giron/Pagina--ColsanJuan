import React from 'react'
import { Alice } from 'next/font/google'
import "./Filosofía_Institucional.scss"

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
}) 

const Mision = () => {
  return (
    <main>
      <header className={`${alice.className} header`}>
        <div className='container-hheader'>
          <span className='span'/>
          IDEAL DEL COLEGIO<br/> 
            SAN JUAN DE GIRÓN
        </div>
      </header>

      <article className='section'>
          <h1 className='h1'>CAPITULO III. FILOSOFÍA JUANISTA</h1>
          <h2>Artículo 7. Definición</h2>
           
          <p>
          El ideal Juanista de inspiración cristiana corresponde al enfoque vital de su Fundador “EDUCAR
          MENTE Y CORAZÓN”.<br/>
          <br/>
          Educar con visión humanista integral, sin fragmentar la persona o reducirla en su dimensión humana trascendente.
          <br/>
          Educar en valores para la justicia, responsabilidad, autonomía, tolerancia y la democracia; orientar a la persona para que sea creativa y original, agente de su propia formación con una misión y compromiso dentro de un concepto de justicia social.
          </p>

          <h2 className='info'>LA INFORMACION FUE SACADA DEL MANUAL DE CONVIVENCIA DE LA INSTITUCIÓN</h2>
      </article>
        
    </main>
  )
}

export default Mision
