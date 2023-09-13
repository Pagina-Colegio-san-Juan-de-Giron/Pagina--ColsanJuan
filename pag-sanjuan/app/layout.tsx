import Menu from "./Componentes/Menu"
import Header from "./Componentes/Header"
import "./layout.css"

export const metadata = {
  title: 'Página Colegio San Juan de Girón',
  description: 'Idk mfkr'
}

export default function RootLayout({children}) {
  return(
      <html lang="es">
        <body className="grid-container">
            <Header/>
            <Menu/>
            <section className="Section">Section{children}</section>
            <footer className="Footer">Footer</footer>
          </body>
      </html>
  )
}