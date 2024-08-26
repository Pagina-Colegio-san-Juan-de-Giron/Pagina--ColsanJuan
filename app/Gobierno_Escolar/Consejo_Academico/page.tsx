import React from 'react'
import Image from 'next/image'
import imagen from "@/app/Componentes/Imágenes/images.jpg"
import { Alice } from 'next/font/google';
import "./Cons_Académico.scss"
import libro from "./open-book-svgrepo-com.svg"
import { promises as fs } from 'fs';


const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const page = async() => {

  const file = await fs.readFile(process.cwd() + '/app/Gobierno_Escolar/Consejo_Academico/Data.json', 'utf8');
  const data = JSON.parse(file);

  const GetURl = (img: string) => {
    var image = require("@/app/Gobierno_Escolar/Consejo_Directivo/" + img)
    return image
  } 

return (
<main> 
    <header className='Hhheader'>
      <h1 className={alice.className}>Consejo Académico</h1>

      <section className='Container-Personas'>
        {
          data.map(data => (
            <div className='container-tarjeta'>
              <Image className='fotopersona' src={GetURl(data.Url)} alt='foto'/>
              <h2 className='nombre'>{data.Nombre}</h2>
              <h2>{data.Cargo}</h2>
            </div>
          ))
        }
      </section>

      <h2>CAPITULO II. GOBIERNO ESCOLAR.</h2>
    </header>

  <div className='container-art-imagen'>
    <article>
      <p>
        Todos los establecimientos educativos deberán organizar un gobierno escolar para la participación democrática de todos los estamentos de la comunidad educativa. Estará constituido por los siguientes órganos.
      </p>


      <h2>Participantes</h2>

      <p>
        • El rector, quien lo preside.<br/> 
        • Los coordinadores.<br/>
        • Un docente por cada área definida en el plan de estudios.<br/>
      </p>

      <h2>Funciones</h2>

      <p>
          <div className='paragraph'><div className='spaaan'>a)</div>  Servir de órgano consultor del Consejo Directivo en la revisión de la propuesta del proyecto educativo institucional.<br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>b)</div>  Estudiar el currículo y propiciar su continuo mejoramiento introduciendo las modificaciones y ajustes, de acuerdo con el procedimiento previsto en el decreto 1860 de 1994. <br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>c)</div>  Organizar el plan de estudios y orientar su ejecución.<br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>d)</div>  Participar en la evaluación institucional anual.<br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>e)</div>  Integrar los consejos de docentes para la evaluación periódica del rendimiento de los estudiantes y para la promoción, asignarles sus funciones y supervisar el proceso general de evaluación.<br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>f)</div>  Recibir y decidir los reclamos de los alumnos sobre la evaluación educativa siguiendo el debido proceso según el SIEE.<br/>
          <br/></div>

          <div className='paragraph'><div className='spaaan'>g)</div>  Las demás funciones afines o complementarias con las anteriores que le atribuya el Proyecto<br/>
          <br/></div>
      </p> 
    </article>

    <span className='container-libro'>
        <span className='libro'>
          <div className='container-imagen'></div>
          <Image className='libroimagen' src={libro} alt='libro'/>
        </span>
    </span>
  </div> 
</main> 
)
}

export default page
