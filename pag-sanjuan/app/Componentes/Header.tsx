import "./Header.css"
import Escudo from "./Imágenes/escudo_auth.jpg"


export default function Header() {
    return (
      <header className="Header">

            <div className="container-header">

                <image className="Escudo" src={Escudo} alt="Escudo" />

                    <div className="NombreColegio">

                    </div>

                    <div className="Lema-Años">

                    </div>
                  
            </div>

      </header>
    )
  }