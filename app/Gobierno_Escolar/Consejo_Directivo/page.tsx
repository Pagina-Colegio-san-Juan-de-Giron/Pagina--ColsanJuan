'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import "./ConsejoDirectivo.scss"
import { Alice } from 'next/font/google';
import { promises as fs } from 'fs';
import ImagenesDocentes from './ImagenesDocentes';


const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

interface DatosDocentes {
  Url: string
  Nombre: string
  Cargo: string
}

const page = () => {

  const [data, setdata] = useState<DatosDocentes[]>()
  const [loading, setload] = useState<boolean>(true)

  useEffect(() => {
    const obtenerJson = async () => {
      const response = await fetch('/api/JsonRead/Directivos');
      const Data = await response.json();
      setdata(Data.data)
      setload(false)
    }


    obtenerJson()

    console.log(data)
  }, [])

  return (
   <main> 
    <header className='Hhheader'>
      <h1 className={alice.className}>Consejo Directivo</h1>
      <h2>CAPITULO II. GOBIERNO ESCOLAR.</h2>

      <div>
        {
          !loading? 
          data ?
           
           <ImagenesDocentes data={data}/>

          :
          <div>no hay json</div>


          :
          <div>cargando</div>
        }
      </div>
      
      <article>
        <h2>Funciones</h2>

        <div className='para'>
          <div className='paragraph'><div className='spaaan'>a)</div>  Tomar las decisiones que afecten el funcionamiento de la institución, excepto las que sean competencia de otra autoridad, tales como las reservadas a la dirección administrativa, en el caso de los establecimientos privados.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>b)</div>  Servir de instancia para resolver los conflictos que se presenten entre docentes y administrativos con los alumnos del establecimiento educativo y después de haber agotado los procedimientos previstos en el reglamento o manual de convivencia.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>c)</div>  Adoptar el manual de convivencia y el reglamento de la institución.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>d)</div>  Fijar los criterios para la asignación de cupos disponibles para la admisión de nuevos alumnos.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>e)</div>  Asumir la defensa y garantía de los derechos de toda la comunidad educativa, cuando alguno de sus miembros se sienta lesionado.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>f)</div>  Aprobar el plan anual de actualización académica del personal docente presentado por el
          Rector.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>g)</div>  Participar en la planeación y evaluación del proyecto educativo institucional, del currículo y del plan de estudios y someterlos a la consideración de la Secretaría de Educación respectiva o del organismo que haga sus veces, para que verifiquen el cumplimiento de los requisitos establecidos en la ley y los reglamentos.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>h)</div>  Estimular y controlar el buen funcionamiento de la institución educativa.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>i)</div> Establecer estímulos y sanciones para el buen desempeño académico y social del alumno que han de incorporarse al reglamento o manual de convivencia. En ningún caso pueden ser contrarios a la dignidad del estudiante.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>j)</div>  Participar en la evaluación de los docentes, directivos docentes y personal administrativo de
          la institución<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>k)</div> Recomendar criterios de participación de la institución en actividades comunitarias, culturales, deportivas y recreativas.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>l)</div> Establecer el procedimiento para permitir el uso de las instalaciones en la realización de actividades educativas, culturales, recreativas, deportivas y sociales de la respectiva comunidad educativa.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>m)</div> Promover las relaciones de tipo académico, deportivo y cultural con otras instituciones educativas y la conformación de organizaciones juveniles.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>n)</div> Fomentar la conformación de asociaciones de padres de familia y de estudiantes.<br/> 
          <br/></div>
          <div className='paragraph'><div className='spaaan'>ñ)</div> Reglamentar los procesos electorales previstos en el presente Decreto.<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>o)</div> Aprobar el presupuesto de ingresos y gastos de los recursos propios y los provenientes de pagos legalmente autorizados, efectuados por los padres y responsables de la educación de los alumnos, tales como derechos académicos, uso de libros de texto y similares<br/>
          <br/></div>
          <div className='paragraph'><div className='spaaan'>p)</div> Darse su propio reglamento. <br/></div>
        </div>
      </article>
    </header>
   </main> 
  )
}

export default page
