'use client'

import "../globals.css"
import React, {useState} from 'react';
import BotonHamburguesa from "./BotonHamburguesa";
import BotonCerrar from "./BotonCerrar";
import Link from "next/link";

export default function Menu() {
  const [cerrado, setcerrado] = useState(true)

  

  const HandleClick = () => {
    setcerrado(!cerrado)
  } 

  const Close = () => {
    setcerrado(true)
  }



return (
<>


<nav className={` ${cerrado ? 'Nav flex w-0 ' : 'Nav flex h-full w-full abierto' }`}>
  <ul className={` ${cerrado ? 'menu hidden ' : 'translate-x-0'} bg-F-blue select-none`} onMouseLeave={Close}>
   <BotonCerrar cerrado={cerrado} HandleClick={Close}/>
   <Link href="/"><li className="justify-center">Inicio</li></Link>
        <li className="justify-center">Institucional
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
          <span><span className="linea"></span></span>
              <Link href="/Institucional/ResenaHistorica"><li>Reseña Histórica</li></Link>
              <Link href="/Institucional/Mision"><li>Misión</li></Link>
              <Link href="/Institucional/Vision"><li>Visión</li></Link>
              <Link href="/Institucional/Filosofia_institucional"><li>Filosofía<br/>Institucional</li></Link>
              <Link href="/Institucional/Simbolos"><li>Simbolos</li></Link>
              <Link href="/Institucional/Uniforme"><li>Uniformes</li></Link>
        </ul>
        
      </li>


      <li className="justify-center">Normativas
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <Link href="/Normativas/PEI"><li>PEI</li></Link>
              <Link href="/Normativas/Manual_de_Convivencia" target="_blank"><li>Manual de<br/>convivencia</li></Link>
              <Link href="/Normativas/SIEE"><li>SIEE</li></Link>
              <Link href="/Normativas/Otros"><li>Otros</li></Link>
        </ul>
        
      </li>

      <li className="justify-center">Gobierno<br/>Escolar

        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <Link href="/Gobierno_Escolar/Consejo_Directivo"><li>Consejo<br/>Directivo</li></Link>
              <Link href="/Gobierno_Escolar/Consejo_Academico"><li>Consejo<br/>Académico</li></Link>
              <Link href="/Gobierno_Escolar/Consejo_Estudiantil"><li>Consejo<br/>Estudiantil</li></Link>
              <Link href="/Gobierno_Escolar/Consejo_de_Padres"><li>Consejo<br/>de padres</li></Link>
        </ul>  
        
      </li>
      
      <li className="justify-center centrado">Personal
      
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>

              <Link href="/Personal/Directivos_Docentes"><li>Directivos<br/>Docente</li></Link>
              <Link href="/Personal/Docentes"><li>Docentes</li></Link>
              <Link href="/Personal/Personero"><li>Personero</li></Link>
              <Link href="/Personal/Contralor"><li>Contralor</li></Link>
              <Link href="/Personal/Administrativos"><li>Administrativos</li></Link>
              <Link href="/Personal/Personal_de_Apoyo"><li>Personal de<br/>apoyo</li></Link>
        </ul>
      
      </li>

      <Link href="/Areas"><li className="justify-center">Áreas</li></Link>

      <li className="justify-center">Inscripciones
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
          <Link href="/Inscripciones/Documentos_Requeridos"><li>Documentos<br/>requeridos</li></Link>
          <Link href="/Inscripciones/Formulario_Inscripcion"><li>Formulario<br/>inscripcion</li></Link>
        </ul>

      </li>

        <Link href="/Contratacion"><li className="justify-center">Contratación</li></Link>
        <Link href="/Egresados"><li className="justify-center">Egresados</li></Link>
        <Link href="/Galeria"><li className="justify-center">Galería</li></Link>
  </ul>
 <BotonHamburguesa cerrado={cerrado} HandleClick={HandleClick}/>
</nav>
</>
)
}
