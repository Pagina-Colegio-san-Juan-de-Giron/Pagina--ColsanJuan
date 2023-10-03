'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import "@/app/PaginaPrincipal.css"



const carousel = () => {

  const images = ["1.png", "2.png", "3.png", "4.png"]
  const [SelectedIndex, SetSelectedIndex] = useState(0);
  const [SelectedImage, SetSelectedImage] = useState(images[0]);

    const SelectNextImage = (index: number, images: string[], next = true) => {

      const condition = next ? SelectedIndex < images.length - 1 : SelectedIndex > 0;
      const NextIndex = next ? condition ? SelectedIndex + 1 : 0 : condition ? SelectedIndex - 1 : images.length - 1;
      SetSelectedImage(images[NextIndex]);
      SetSelectedIndex(NextIndex);
    }

    const Previous = () => {

      SelectNextImage(SelectedIndex, images, false);  

    }

    const Next = () => {

      SelectNextImage(SelectedIndex, images); 

    }

  return (
    <div className="container-slider">
      <Image className="container-slider" src={require(`./Imágenes/${SelectedImage}`)} alt='imagen'/>
      <button onClick={Previous}>{"<"}</button>
      <button onClick={Next}>{">"}</button>
    </div>
  )
}

export default carousel
