'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "@/app/PaginaPrincipal.css"
import { Console } from 'console';

interface Props{
  images: string[];
  AutoPlay?: boolean;
}

const carousel = (props: Props) => {



  const [SelectedIndex, SetSelectedIndex] = useState(0);
  const [SelectedImage, SetSelectedImage] = useState(props.images[0]);
  const [cargado, setcargado] = useState(false);


  useEffect(() => {
    if (props.AutoPlay)
    {
      const interval = setInterval(() => {
        console.log(props.images)
        Random();
  
      }, 7000);
      return() => clearInterval(interval);
    }
  });

    const SelectNextImage = (index: number, images: string[], next = true) => {
      setcargado(false);
      setTimeout(() => {
        const NextIndex = Math.floor(Math.random() * images.length);
        SetSelectedImage(images[NextIndex]);
        SetSelectedIndex(NextIndex);
        console.log('props.images', props.images);
        console.log('SelectedImage', SelectedImage);
      }, 1500)
    }


    const Random = () => {

      SelectNextImage(SelectedIndex, props.images); 

    }


  return (
    <div className="container-slider">
      <span className='container-Sslider'>
        <Image className={`${cargado ? "cargado" : ""} sliderImg`} src={require(`../../public/img/${SelectedImage}`)} alt='imagen' onLoad={() => setcargado(true)}/>
      </span>
    </div>
  )


}

export default carousel
