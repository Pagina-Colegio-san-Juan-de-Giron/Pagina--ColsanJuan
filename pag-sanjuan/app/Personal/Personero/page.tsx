import React from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import "./Personero.scss"
import { Alice } from 'next/font/google';

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const page = () => {
  return (
   <main> 
    <header className='Hhheader'>
      <h1 className={alice.className}>Personero o Personera</h1>
      <h2>CAPITULO VI. PERSONERO(A) DE LOS ESTUDIANTES</h2>
    </header>
    <article>
     <div className='Foto'>
      <p>
        Es un líder juvenil con la capacidad de generar participación en la
        Comunidad Estudiantil, de descubrir y trabajar las necesidades del grupo al que representa, de defenderlos derechos humanos y promueve la cultura democrática, de velar porque la comunicación entre estudiantes, maestros, padres de familia y demás integrantes de la Comunidad Educativa sea abierta, clara, sencilla y respetuosa.
      </p>

      <p>
        <h2>Artículo 28. Objetivos</h2> <br/>
        <b>El trabajo del Personero Estudiantil está encaminado a la promoción y el cumplimiento de los Derechos y Deberes de los estudiantes, además de:<br/>
        <br/>
        • Plantear quejas e inquietudes ante las distintas instancias de los Colegios.<br/>

        • Utilizar de manera responsable herramientas de interacción, para promover las diferentes

        actividades que se realicen dentro de la Institución Educativa.<br/>

        • Servir de garantes del cumplimiento de la normatividad en los procesos disciplinarios. 

        • Ser promotor de paz y convivencia.<br/>
        </b>
      </p>
     </div> 
    </article>
   </main> 
  )
}

export default page
