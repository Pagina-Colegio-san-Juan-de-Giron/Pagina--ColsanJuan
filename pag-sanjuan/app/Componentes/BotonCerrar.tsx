import React from 'react'
import "./Botoncerrado.css"

const BotonCerrar = ({ cerrado, HandleClick }: { cerrado: boolean; HandleClick: () => void }) => {
  return (

    <i onClick={HandleClick}>
       <span>X</span>
    </i>
  )
}

export default BotonCerrar

