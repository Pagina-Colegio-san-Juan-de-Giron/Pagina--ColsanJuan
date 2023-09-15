'use client'

import "../globals.css"
import "tailwindcss/tailwind.css";
import React, {useState} from 'react';
import BotonHamburguesa from "./BotonHamburguesa";
import BotonCerrar from "./BotonCerrar";

export default function Menu() {
  const [cerrado, setcerrado] = useState(true)
  
  const HandleClick = () => {
   setcerrado(!cerrado);
  }

return (
<>


<nav className="Nav flex h-full">
  <ul className={` ${cerrado ? '' : 'translate-x-0'} bg-F-blue min-h-full select-none`} onMouseLeave={HandleClick}>
   <BotonCerrar cerrado={cerrado} HandleClick={HandleClick}/>
      <li className="flex justify-center">Inicio</li>
        <li className="flex justify-center">Institucional
        
        <ul className="submenu">
              <li>Reseña Histórica</li>
              <li>Misión</li>
              <li>Visión</li>
              <li>Filosofía<br/>Institucional</li>
              <li>Simbolos</li>
              <li>Uniformes</li>
        </ul>
        
      </li>


      <li className="flex justify-center">Normativas
        
        <ul className="submenu">
              <li>PEI</li>
              <li>Manual<br/>de<br/>convivencia</li>
              <li>SIE</li>
              <li>Otros</li>
        </ul>
        
      </li>

      <li className="flex justify-center">Gobierno<br/>Escolar

        <ul className="submenu">
              <li>Consejo<br/>Directivo</li>
              <li>Consejo<br/>Académico</li>
              <li>Consejo<br/>Estudiantil</li>
              <li>Consejo<br/>de padres</li>
        </ul>  
        
      </li>
      
      <li className="flex justify-center centrado">Personal
      
        <ul className="submenu">
              <li>Directivos<br/>Docente</li>
              <li>Docentes</li>
              <li>Personero</li>
              <li>Contralor</li>
              <li>Administrativos</li>
              <li>Personal<br/>de<br/>apoyo</li>
        </ul>
      
      </li>

      <li className="flex justify-center">Áreas</li>

      <li className="flex justify-center">Inscripciones
        
        <ul className="submenu">
          <li>Documentos<br/>requeridos</li>
          <li>Formulario<br/>inscripcion</li>
        </ul>

      </li>

        <li className="flex justify-center">Contratación</li>
        <li className="flex justify-center">Egresados</li>
        <li className="flex justify-center">Galería</li>
  </ul>
 <BotonHamburguesa cerrado={cerrado} HandleClick={HandleClick}/>
</nav>
</>
)
}
