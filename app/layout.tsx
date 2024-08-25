import Menu from "./Componentes/Menu"
import Header from "./Componentes/Header"
import Footer from "./Componentes/footer"
import "./layout.css"
import {ReactNode} from 'react'
import React from 'react'

export const metadata = {
  title: 'Página Colegio San Juan de Girón',
  description: 'Idk'
}

export default function RootLayout({children}: { children: ReactNode }) {
  return(
      <html lang="es">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </head>
        <body className="grid-container">
            <Header/>
            <Menu/>
              <section className="Section">
                  {children}
              </section>
            <Footer/>
          </body>
      </html>
  )
}