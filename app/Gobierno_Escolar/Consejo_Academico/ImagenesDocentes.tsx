'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import path from 'node:path'
import process from 'node:process'
interface DatosDocentes {
    Url: string
    Nombre: string
    Cargo: string
  }

const obtenerimagenes = (Path: string) => {
    const [FinalImport, setImport] = useState<string>("")

    useEffect(() => {
        const ObtenerImagen = async () => {
          const Fullpath = path.join(process.cwd(), "app/Gobierno_Escolar/Consejo_Academico/", Path)
          try {
            const imagen = await import(Fullpath)
            setImport(imagen.default)
          } catch (error) {
            console.log("error al obtener imagen", error)
          }
        }

        ObtenerImagen()
    }, [Path])

    if(typeof FinalImport !== "undefined") return FinalImport
}




function ImagenesDocentes({data} : {data: DatosDocentes[]}) {

  
  return (
    <section className='Container-Personas'>
        {
          data.map(data => {
            const FinalImport = obtenerimagenes(data.Url)
            return(
            <div className='container-tarjeta' key={data.Nombre}>
              <Image className='fotopersona' src={FinalImport as string} alt='foto'/>
              <h2 className='nombre'>{data.Nombre}</h2>
              <h2>{data.Cargo}</h2>
            </div>
          )})
        }
      </section>
  )
}

export default ImagenesDocentes
