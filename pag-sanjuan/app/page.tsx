'use client'

import "./PaginaPrincipal.css"
import Slider from "./Componentes/carousel"

export default function Home() {

  const images= ["1.png", "2.png", "3.png", "4.png"]

  return (
    <div className="container-pagina">
        <Slider images={images} AutoPlay={true}/>
    </div>
  )
}
