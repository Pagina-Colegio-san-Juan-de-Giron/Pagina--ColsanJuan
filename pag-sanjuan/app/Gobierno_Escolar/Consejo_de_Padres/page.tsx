import React from 'react'
import Image from 'next/image'
import imagen from "./gray-color-solid-background-1920x1080.png"
import { Alice } from 'next/font/google';
import "./Consejo_Padres.scss"

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const page = () => {
  return (
   <main>

    <header><h1 className={alice.className}>CONSEJO DE PADRES DE FAMILIA</h1></header>

    <article>
      <h2>DEFINICION DEL CONSEJO DE PADRES DE FAMILIA</h2>
      <p>
       El decreto 1075 de 2015, en el título 4, de la parte 3, del libro 2, establece normas sobre la participación de los padres de familia, en el mejoramiento de los procesos educativos y específicamente en el artículo 2.3.4.5, define el consejo de padres de familia un órgano de participación de los padres de familia del establecimiento educativo destinado a asegurar su continua participación en el proceso educativo y a elevar los resultados de calidad del servicio. 
      </p>

      <h2>CORRESPONDE AL CONSEJO DE PADRES DE FAMILIA</h2>
      <div className='parrafo-imagen-container'>
        <div className='Parrafo'>
          Estará integrado por uno (1), máximo (3) padres de familia por cada uno de los grados que ofrezca el establecimiento educativo. La conformación del consejo de padres es obligatoria. Su estructura, funcionamiento y funciones, proceso de elección de los representantes se encuentran establecidos en los artículos 2.3.4.6, 2.3.4.7 y 2.3.4.8 del decreto 1075 de 2015 El Consejo de Padres de Familia podrá sesionar de manera virtual, empleando herramientas tecnológicas. Estará integrado por uno (1), máximo (3) padres de familia por cada uno de los grados que ofrezca el establecimiento educativo. La conformación del consejo de padres es obligatoria. Su estructura, funcionamiento y funciones, proceso de elección de los representantes se encuentran establecidos en los artículos 2.3.4.6, 2.3.4.7 y 2.3.4.8 del decreto 1075 de 2015 El Consejo de Padres de Familia podrá sesionar de manera virtual, empleando herramientas tecnológicas. 
        </div>
        <Image src={imagen} alt='imagen'/>
      </div>

      <h2>ASOCIACIÓN DE PADRES DE FAMILIA</h2>

      <p className='parrafo2'>
       Es una entidad jurídica de derecho privado, sin ánimo de lucro, que se constituye por la decisión libre y voluntaria de los padres de familia de los estudiantes matriculados en un establecimiento educativo. El patrimonio de la Asociación de Padres de Familia y sugestión, deben estar claramente separados de los del establecimiento educativo. Será administrado únicamente por la Junta directiva de acuerdo con, los estatutos. Esta designará al responsable del recaudo de los ingresos que por distintos conceptos reciba la institución, en ningún caso, podrá ser un directivo, administrativo o docente del establecimiento educativo. El procedimiento para su constitución está previsto en el artículo 40 del decreto 2150 de 1995. Las finalidades, los requisitos para el manejo de los recursos, las prohibiciones se encuentran establecidas en los artículos 2.3.4.10, 2.3.4.11 y 2.3.4.12 del decreto 1075 de 2015.  
      </p>
    </article>
   </main> 
  )
}

export default page
