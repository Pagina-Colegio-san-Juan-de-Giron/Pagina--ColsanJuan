
import React, {useState} from 'react'
import styled from 'styled-components'
import "./scss/Boton.css"



const BotonHamburguesa = ({ cerrado, HandleClick }: { cerrado: boolean; HandleClick: () => void }) => {
  return (
    <>
  <div className='flex btn'>  
    <div className={` ${cerrado ? 'IconoNM' : 'IconoM'} contenedor-boton`} onClick={HandleClick}>
        <Cbarras className={` ${cerrado ? 'IconoMenu' : ''}`}>
            <Barra2 className='justify-end'/>
            
            <Barra1 className='justify-start'/>
        </Cbarras>
    </div>
  </div>      
    </>    
  )
}

export default BotonHamburguesa

const Barra1 = styled.div`
  width: 2.5rem;
  height: 1rem;
  z-index: 1;
  transform: rotate(-45deg);
  transition: all 300ms ease;
  background-color: white;
  border: blue .2rem solid;
`
const Barra2 = styled.div`
  width: 2.5rem;
  height: 1rem;
  z-index: 1;
  transform: rotate(45deg);
  transition: all 300ms ease;
  background-color: white;
  border: blue .2rem solid;
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