'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "@/app/PaginaPrincipal.scss"
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
    SetSelectedImage(props.images[0])
  }, [])
// se ejecuta la api para cargar las imagenes 

    const SelectNextImage = (index: number, images: string[]) => {
      setcargado(false);
      setTimeout(() => {
        if(SelectedIndex < images.length - 1){
          const NextIndex = SelectedIndex + 1;
          SetSelectedImage(images[NextIndex]);
          SetSelectedIndex(NextIndex);
        }
        else if(SelectedIndex == images.length - 1){
          const NextIndex = 0;
          SetSelectedImage(images[NextIndex]);
          SetSelectedIndex(NextIndex);
        }
        console.log(SelectedImage)
      }, 1000)
    };

    const SelectPrevImage = (index: number, images: string[]) => {
      setcargado(false);
      setTimeout(() => {
        if(SelectedIndex > 0){
          const NextIndex = SelectedIndex - 1;
          SetSelectedImage(images[NextIndex]);
          SetSelectedIndex(NextIndex);
        }
        else if(SelectedIndex == 0){
          const NextIndex = images.length - 1;
          SetSelectedImage(images[NextIndex]);
          SetSelectedIndex(NextIndex);
        }
        console.log(SelectedImage)
      }, 1000)
    };

    
  return (
    <div className="container-slider">
      <span className='container-SsliderNoti'>
        <Image className="cargado" src={`/SliderNoticias/${SelectedImage}`} height={100} width={100} alt='imagen' onLoad={() =>(setcargado(true))}/>
        <span className='Boton-der' onClick={() => SelectNextImage(SelectedIndex, props.images)}>&gt;</span>
        <span className='Boton-izq' onClick={() => SelectImage(SelectedIndex, props.images)}>&lt;</span>
      </span>
    </div>
    )
}

export default carousel
