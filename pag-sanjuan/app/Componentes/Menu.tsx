'use client'

import "../globals.css"
import "tailwindcss/tailwind.css";
import React, {useState} from 'react';
import BotonHamburguesa from "./BotonHamburguesa";
import BotonCerrar from "./BotonCerrar";

export default function Menu() {
  const [cerrado, setcerrado] = useState(true)
  let celular = false

  const definirancho = () =>{
  let ancho = window.innerWidth

    if(ancho < 600){
      celular = true;
    }
    else{
      celular = false;
    }
  }

  window.addEventListener('load', definirancho);
  window.addEventListener('load', definirancho);

  const HandleClick = () => {
   setcerrado(!cerrado);
  }



return (
<>


<nav className="Nav flex h-full">
  <ul className={` ${cerrado ? 'menu' : 'translate-x-0 menu'}bg-F-blue min-h-full select-none`} onMouseLeave={HandleClick}>
   <BotonCerrar cerrado={cerrado} HandleClick={HandleClick}/>
      <li className="justify-center">Inicio</li>
        <li className="justify-center">Institucional
        
        <ul className="submenu">
          <span><span className="linea"></span></span>
              <li>Reseña Histórica</li>
              <li>Misión</li>
              <li>Visión</li>
              <li>Filosofía<br/>Institucional</li>
              <li>Simbolos</li>
              <li>Uniformes</li>
        </ul>
        
      </li>


      <li className="justify-center">Normativas
        
        <ul className="submenu">
        <span><span className="linea"></span></span>
              <li>PEI</li>
              <li>Manual<br/>de<br/>convivencia</li>
              <li>SIE</li>
              <li>Otros</li>
        </ul>
        
      </li>

      <li className="justify-center">Gobierno<br/>Escolar

        <ul className="submenu">
        <span><span className="linea"></span></span>
              <li>Consejo<br/>Directivo</li>
              <li>Consejo<br/>Académico</li>
              <li>Consejo<br/>Estudiantil</li>
              <li>Consejo<br/>de padres</li>
        </ul>  
        
      </li>
      
      <li className="justify-center centrado">Personal
      
        <ul className="submenu">
        <span><span className="linea"></span></span>
              <li>Directivos<br/>Docente</li>
              <li>Docentes</li>
              <li>Personero</li>
              <li>Contralor</li>
              <li>Administrativos</li>
              <li>Personal<br/>de<br/>apoyo</li>
        </ul>
      
      </li>

      <li className="justify-center">Áreas</li>

      <li className="justify-center">Inscripciones
        
        <ul className="submenu">
        <span><span className="linea"></span></span>
          <li>Documentos<br/>requeridos</li>
          <li>Formulario<br/>inscripcion</li>
        </ul>

      </li>

        <li className="justify-center">Contratación</li>
        <li className="justify-center">Egresados</li>
        <li className="justify-center">Galería</li>
  </ul>
 <BotonHamburguesa cerrado={cerrado} HandleClick={HandleClick}/>
</nav>
</>
)
}
