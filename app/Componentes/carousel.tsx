'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "@/app/PaginaPrincipal.css"
//crea la interfas para la creacion del front dinamico 
interface Props{
  images: string[];
 }

 // creamos la funcion carrucel que nos permite escoger la imagen atraves de la generacion de un randoms
const carousel = (props: Props) => {

  const [SelectedIndex, SetSelectedIndex] = useState(0);
  const [SelectedImage, SetSelectedImage] = useState(props.images[0]);
  const [cargado, setcargado] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
        SelectNextImage(SelectedIndex, props.images);
      }, 7000);
      return() => clearInterval(interval);
    });
// se ejecuta la api para cargar las imagenes 

    const SelectNextImage = (index: number, images: string[]) => {
      setcargado(false);
      setTimeout(() => {
        const NextIndex = Math.floor(Math.random() * images.length);
        SetSelectedImage(images[NextIndex]);
        SetSelectedIndex(NextIndex);
        console.log(SelectedImage)
      }, 1000)
    };
    
  return (
    <div className="container-slider">
      <span className='container-Sslider'>
        <Image className="cargado" src={require(`../../public/img/${SelectedImage}`)} alt='imagen' onLoad={() =>(setcargado(true))}/>
      </span>
    </div>
    )
}

export default carousel
