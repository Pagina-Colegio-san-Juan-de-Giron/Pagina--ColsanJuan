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

  let ancho = window.innerWidth

  const Cel = () => {
    if(ancho > 600){
       HandleClick();
    }
    else{
      setcerrado(cerrado);
    }
  }



return (
<>


<nav className="Nav flex h-full">
  <ul className={` ${cerrado ? 'menu' : 'translate-x-0 menu'}bg-F-blue min-h-full select-none`} onMouseLeave={Cel}>
   <BotonCerrar cerrado={cerrado} HandleClick={HandleClick}/>
   <a href="/"><li className="justify-center">Inicio</li></a>
        <li className="justify-center">Institucional
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
          <span><span className="linea"></span></span>
              <li>Reseña Histórica</li>
              <a href="/Institucional/Mision"><li>Misión</li></a>
              <a href="/Institucional/Vision"><li>Visión</li></a>
              <li>Filosofía<br/>Institucional</li>
              <a href="/Institucional/Simbolos"><li>Simbolos</li></a>
              <a href="/Institucional/Uniforme"><li>Uniformes</li></a>
        </ul>
        
      </li>


      <li className="justify-center">Normativas
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <li>PEI</li>
              <li>Manual de<br/>convivencia</li>
              <li>SIE</li>
              <li>Otros</li>
        </ul>
        
      </li>

      <li className="justify-center">Gobierno<br/>Escolar

        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <li>Consejo<br/>Directivo</li>
              <li>Consejo<br/>Académico</li>
              <li>Consejo<br/>Estudiantil</li>
              <li>Consejo<br/>de padres</li>
        </ul>  
        
      </li>
      
      <li className="justify-center centrado">Personal
      
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
        <span><span className="linea"></span></span>
              <li>Directivos<br/>Docente</li>
              <li>Docentes</li>
              <li>Personero</li>
              <li>Contralor</li>
              <li>Administrativos</li>
              <li>Personal de<br/>apoyo</li>
        </ul>
      
      </li>

      <li className="justify-center">Áreas</li>

      <li className="justify-center">Inscripciones
        
        <ul className={`${cerrado ? 'submenu' : 'translate-x-0 submenu'}`}>
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
