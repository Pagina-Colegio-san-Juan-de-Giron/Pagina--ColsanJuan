'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "@/app/PaginaPrincipal.css"

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
        Next();
      }, 7000);
      return() => clearInterval(interval);
    }
  });

    const SelectNextImage = (index: number, images: string[], next = true) => {
      setcargado(false);
      setTimeout(() => {
        const condition = next ? SelectedIndex < images.length - 1 : SelectedIndex > 0;
        const NextIndex = next ? condition ? SelectedIndex + 1 : 0 : condition ? SelectedIndex - 1 : images.length - 1;
        SetSelectedImage(images[NextIndex]);
        SetSelectedIndex(NextIndex);
      }, 1500)
    }

    const Previous = () => {

      SelectNextImage(SelectedIndex, props.images, false);  

    }

    const Next = () => {

      SelectNextImage(SelectedIndex, props.images); 

    }

    const 


  return (
    <div className="container-slider">
      <Image className={`${cargado ? "cargado" : ""} sliderImg`} src={require(`./Imágenes/${SelectedImage}`)} alt='imagen' onLoad={() => setcargado(true)}>
      </Image>
     
     <div className="container-botones">
      <div className="container-circulos">
          <span className="circulo" onClick={}></span>
          <span className="circulo" onClick={}></span>
          <span className="circulo" onClick={}></span>
          <span className="circulo" onClick={}></span>
      </div>
     </div>
    </div>
  )
}

export default carousel
