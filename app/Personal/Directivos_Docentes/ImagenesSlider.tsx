'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import {motion} from 'framer-motion';





function ImagenesDocentes({SliderIMGS, Iref} : {SliderIMGS: string[]; Iref: React.MutableRefObject<(HTMLSpanElement | null)[]>}) {
const [ImagenesCargadas, setCargadas] = useState<string[]>([""])

    useEffect(() => {
        const ObtenerImagen = async () => {

          const nuevasCargas: string[] = []
          for(const Path of SliderIMGS){
            try {
              const imagen = await import(`@/app/Personal/Directivos_Docentes/Imágenes/carousel/${Path}`)
              nuevasCargas.push(imagen.default)
            } catch (error) {
              console.log("error al obtener imagen", error)
            }
          }
          setCargadas(nuevasCargas)
        }

        ObtenerImagen()
    },[SliderIMGS])
  
    return (<>
    {
        ImagenesCargadas.map((Img, i) =>{
          return(
   
                 <motion.span
              className='card' key={i} ref={(el) => {Iref.current[i] = el}}>
                           <h1>{i}</h1>
                           <div className='sspan'></div>
                           <Image className="imgen" src={Img} alt={`imagen-slider ${Img}`} width={100} height={100} />
                 </motion.span>
      )}
     )}
    </>
)
}

export default ImagenesDocentes
