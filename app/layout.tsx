
import Menu from "./Componentes/Menu"
import Header from "./Componentes/Header"
import Footer from "./Componentes/footer"
import "./layout.css"
import "./globals.css"
import {ReactNode} from 'react'
import React from 'react'
import SessionProvider from "@/app/Componentes/SessionProvider";


export const metadata = {
  title: 'Página Colegio San Juan de Girón',
  description: 'Idk'
}

export default function RootLayout({children}: { children: ReactNode }) {
  return(
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </head>
        <body className="grid-container">
        <SessionProvider>
            <Header/>
            <span className="containerRedes">
            <div className='redes'>
                    <a target="_blank"rel="noreferrer" href='https://www.facebook.com/conexionjuanista?paipv=0&eav=AfY-7AzJcxA3nBoeATxnFX-B9IJkfX1yiFWHvotVnf2H-8ZGGR9l9BNR2uxVPvdErEo&_rdr'> 
                    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 408.788 408.788" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path style={{ fill: "#475993" }} d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085C408.786,24.662,384.124,0,353.701,0z" /></g></svg>
                    </a>

                    <a target="_blank"rel="noreferrer" href='https://www.instagram.com/colsanjuandegiron/'>
                    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 551.034 551.034" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><g id="XMLID_13_"><linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" style={{ stopColor: "#E09B3D" }} /><stop offset="0.3" style={{ stopColor: "#C74C4D" }} /><stop offset="0.6" style={{ stopColor: "#C21975" }} /><stop offset="1" style={{ stopColor: "#7024C4" }} /></linearGradient><path id="XMLID_17_" style={{ fill: "url(#XMLID_2_)" }} d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" /><linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" style={{ stopColor: "#E09B3D" }} /><stop offset="0.3" style={{ stopColor: "#C74C4D" }} /><stop offset="0.6" style={{ stopColor: "#C21975" }} /><stop offset="1" style={{ stopColor: "#7024C4" }} /></linearGradient><path id="XMLID_81_" style={{ fill: "url(#XMLID_3_)" }} d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z" /><linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" style={{ stopColor: "#E09B3D" }} /><stop offset="0.3" style={{ stopColor: "#C74C4D" }} /><stop offset="0.6" style={{ stopColor: "#C21975" }} /><stop offset="1" style={{ stopColor: "#7024C4" }} /></linearGradient><circle id="XMLID_83_" style={{ fill: "url(#XMLID_4_)" }} cx="418.306" cy="134.072" r="34.149" /></g></g></svg>
                    </a>

                    <a target="_blank"rel="noreferrer" href='https://www.tiktok.com/@colsanjuandegiron'>
                    <svg height="2500" width="2179" xmlns="http://www.w3.org/2000/svg" viewBox="-0.32296740998066475 -3.1283528999801873 42.68446958125966 42.128352899980186"><g fill="none"><path d="M14 15.599v-1.486A13.1 13.1 0 0 0 12.337 14C5.535 14 0 19.18 0 25.547 0 29.452 2.086 32.91 5.267 35c-2.13-2.132-3.315-4.942-3.313-7.861 0-6.276 5.377-11.394 12.046-11.54" fill="#00f2ea" /><path d="M14.327 32c2.876 0 5.221-2.273 5.328-5.107l.01-25.292h4.65A8.72 8.72 0 0 1 24.164 0h-6.35l-.011 25.293c-.106 2.832-2.453 5.105-5.328 5.105a5.329 5.329 0 0 1-2.476-.61A5.34 5.34 0 0 0 14.327 32m18.672-21.814V8.78a8.818 8.818 0 0 1-4.81-1.421A8.85 8.85 0 0 0 33 10.186" fill="#00f2ea" /><path d="M28 7.718A8.63 8.63 0 0 1 25.832 2h-1.697A8.735 8.735 0 0 0 28 7.718M12.325 20.065c-2.94.004-5.322 2.361-5.325 5.27A5.267 5.267 0 0 0 9.854 30a5.2 5.2 0 0 1-1.008-3.073c.003-2.91 2.385-5.268 5.325-5.271.55 0 1.075.09 1.572.244v-6.4a11.72 11.72 0 0 0-1.572-.114c-.092 0-.183.006-.274.007v4.916a5.286 5.286 0 0 0-1.572-.244" fill="#ff004f" /><path d="M32.153 11v4.884a15.15 15.15 0 0 1-8.813-2.811V25.84c0 6.377-5.23 11.565-11.658 11.565-2.485 0-4.789-.778-6.682-2.097A11.67 11.67 0 0 0 13.528 39c6.429 0 11.659-5.188 11.659-11.564V14.668A15.15 15.15 0 0 0 34 17.478v-6.283A8.87 8.87 0 0 1 32.153 11" fill="#ff004f" /><path d="M23.979 25.42V12.632A15.741 15.741 0 0 0 33 15.448v-4.89a9.083 9.083 0 0 1-4.912-2.82C26.016 6.431 24.586 4.358 24.132 2h-4.747l-.01 25.215c-.11 2.824-2.505 5.09-5.44 5.09-1.754-.002-3.398-.822-4.42-2.204-1.794-.913-2.919-2.716-2.92-4.682.003-2.92 2.44-5.285 5.45-5.289.56 0 1.098.09 1.608.245v-4.933C7.202 15.589 2 20.722 2 27.016c0 3.045 1.219 5.816 3.205 7.885A12.115 12.115 0 0 0 12.045 37c6.58 0 11.934-5.195 11.934-11.58" fill="#fff" /></g></svg>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@ColegioSanJuandeGiron">
                    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 461.001 461.001" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{ fill: "#F61C0D" }} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path> </g> </g></svg>
                    </a>
                  </div>
            </span>
            <Menu/>
              <section className="Section">
                  {children}
              </section>
            <Footer/>
            </SessionProvider>
          </body>
      </html>
  )
}