import "./Header.css";
import Image from 'next/image';
import escudo from "./Imágenes/Escudo.svg";
import { Alice } from 'next/font/google'
import { Pacifico } from 'next/font/google'

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

const pacifico = Pacifico({ 
  subsets: ['latin-ext'],
  weight: ['400']
})

export default function Header() {
    return (
      <header className="Header">

            <div className="container-header">

                <span className="Escudo"><Image className="imagen" src={escudo} alt="Escudo" height={100}/></span>

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
                      <div className="container-lema">
                          <span className="pacifico"><span className={pacifico.className}>Educando mente y corazón</span></span>
                          <span className="años"><span className={alice.className}>47 años de tradición</span></span>
                      </div>
                    </div>
                  
            </div>

      </header>
    )
  }