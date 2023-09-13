import "./Header.css";
import Image from 'next/image';
import escudo from "./Imágenes/escudo_auth.jpg";
import { Alice } from 'next/font/google'

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

export default function Header() {
    return (
      <header className="Header">

            <div className="container-header">

                <Image className="Escudo" src={escudo} alt="Escudo"/>

                    <div className="NombreColegio" >

                      <div className="contenedor-letras">
                        <div className="contenedor-span">
                          <span className="Texto"><span className={alice.className}>Colegio</span></span>
                          <span className="TextoMedio"><span className={alice.className}>SAN JUAN</span></span>
                          <span className="Texto"><span className={alice.className}>De Girón</span></span>
                        </div>
                      </div>

                    </div>

                    <div className="Lema-Años">

                    </div>
                  
            </div>

      </header>
    )
  }