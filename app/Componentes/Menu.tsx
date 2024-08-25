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
  <ul className={` ${cerrado ? 'menu hidden ' : 'translate-x-0 menu'} bg-F-blue min-h-full h-full select-none`} onMouseLeave={Close}>
   <BotonCerrar cerrado={cerrado} HandleClick={Close}/>
   <a href="/"><li className="justify-center">Inicio</li></a>
        <li className="justify-center">Institucional
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
          <span><span className="linea"></span></span>
              <a href="/Institucional/ResenaHistorica"><li>Reseña Histórica</li></a>
              <a href="/Institucional/Mision"><li>Misión</li></a>
              <a href="/Institucional/Vision"><li>Visión</li></a>
              <a href="/Institucional/Filosofia_institucional"><li>Filosofía<br/>Institucional</li></a>
              <a href="/Institucional/Simbolos"><li>Simbolos</li></a>
              <a href="/Institucional/Uniforme"><li>Uniformes</li></a>
        </ul>
        
      </li>


      <li className="justify-center">Normativas
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <a href="/Normativas/PEI"><li>PEI</li></a>
              <a href="" target="_blank"><li>Manual de<br/>convivencia</li></a>
              <a href="/Normativas/SIEE"><li>SIEE</li></a>
              <a href="/Normativas/Otros"><li>Otros</li></a>
        </ul>
        
      </li>

      <li className="justify-center">Gobierno<br/>Escolar

        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <a href="/Gobierno_Escolar/Consejo_Directivo"><li>Consejo<br/>Directivo</li></a>
              <a href="/Gobierno_Escolar/Consejo_Academico"><li>Consejo<br/>Académico</li></a>
              <a href="/Gobierno_Escolar/Consejo_Estudiantil"><li>Consejo<br/>Estudiantil</li></a>
              <a href="/Gobierno_Escolar/Consejo_de_Padres"><li>Consejo<br/>de padres</li></a>
        </ul>  
        
      </li>
      
      <li className="justify-center centrado">Personal
      
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <a href="/Personal/Directivos_docentes"><li>Directivos<br/>Docente</li></a>
              <a href="/Personal/Docentes"><li>Docentes</li></a>
              <a href="/Personal/Personero"><li>Personero</li></a>
              <a href="/Personal/Contralor"><li>Contralor</li></a>
              <a href="/Personal/Administrativos"><li>Administrativos</li></a>
              <a href="/Personal/Personal_de_Apoyo"><li>Personal de<br/>apoyo</li></a>
        </ul>
      
      </li>

      <a href="/Areas"><li className="justify-center">Áreas</li></a>

      <li className="justify-center">Inscripciones
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
          <a href="/Inscripciones/Documentos_Requeridos"><li>Documentos<br/>requeridos</li></a>
          <a href="/Inscripciones/Formulario_Inscripcion"><li>Formulario<br/>inscripcion</li></a>
        </ul>

      </li>

        <Link href="/Contratacion"><li className="justify-center">Contratación</li></Link>
        <a href="/Egresados"><li className="justify-center">Egresados</li></a>
        <a href="/Galeria"><li className="justify-center">Galería</li></a>
  </ul>
 <BotonHamburguesa cerrado={cerrado} HandleClick={HandleClick}/>
</nav>
</>
)
}
