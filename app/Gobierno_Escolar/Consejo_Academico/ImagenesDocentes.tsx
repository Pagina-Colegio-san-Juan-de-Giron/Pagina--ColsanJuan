'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
interface DatosDocentes {
    Url: string
    Nombre: string
    Cargo: string
  }

const Obtenerimagenes = (Path: string) => {
    const [FinalImport, setImport] = useState<string>("")

    useEffect(() => {
        const ObtenerImagen = async () => {
          try {
            const imagen = await import(`@/app/Gobierno_Escolar/Consejo_Academico/${Path}`)
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
            const FinalImport = Obtenerimagenes(data.Url)
            console.log(FinalImport)
            return FinalImport?(  
              <div className='container-tarjeta' key={data.Nombre}>
                <Image className='fotopersona' src={FinalImport} alt='foto'/>
                <h2 className='nombre'>{data.Nombre}</h2>
                <h2>{data.Cargo}</h2>
              </div>
          ) :
          null})
        }
      </section>
  )
}

export default ImagenesDocentes
