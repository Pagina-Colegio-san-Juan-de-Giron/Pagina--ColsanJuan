
import React, {useState} from 'react'
import styled from 'styled-components'
import "./Boton.css"



const BotonHamburguesa = ({ cerrado, HandleClick }: { cerrado: boolean; HandleClick: () => void }) => {
  return (
    <>
  <div className='flex btn w-0'>  
    <div className={` ${cerrado ? 'IconoNM' : 'IconoM'} contenedor-boton`} onClick={HandleClick}>
        <Cbarras className={` ${cerrado ? 'IconoMenu' : ''}`}>
            <Barra1 className='justify-start'/>
            
            <Barra2 className='justify-end'/>
        </Cbarras>
    </div>
  </div>      
    </>    
  )
}

export default BotonHamburguesa

const Barra1 = styled.div`
  width: 1.5rem;
  height: .5rem;
  z-index: 1;
  transform: rotate(45deg);
  transition: all 300ms ease;
  background-color: white;
`
const Barra2 = styled.div`
  width: 1.5rem;
  height: .5rem;
  z-index: 1;
  transform: rotate(-45deg);
  transition: all 300ms ease;
  background-color: white;
`

const Cbarras = styled.div`
transition: all 0.3s ease;
pointer-events: auto;
display: flex;
flex-direction: column;
row-gap: .25rem;
justify-content: center;
align-items: center;
width: 2rem;
height: 2rem;
`