import React from 'react'
import "./simbolos.scss"
import Image from 'next/image'
import Escudo from '@/app/Componentes/Imágenes/Escudo.svg'
import Bandera from './Imágenes/bandera.svg'
import { Alice } from 'next/font/google'

const alice = Alice({ 
  subsets: ['latin-ext'],
  weight: ['400']
})


const Simbolos = () => {
  return (
    <main>
      <header className={`Título ${alice.className}`} >Simbolos</header>
      <section className='grid-template'>
        <div className='BanderaS'>
            <article className='art-bandera'>
              <header><h2 className={alice.className}>Bandera</h2></header>
              <p>
                El color blanco hace alusión a la luz de la sabiduría y de la verdad que imparte nuestro colegio en las mentes de todos sus educandos. La paz por encima de todo ese es el significado de no solo nuestra bandera sino tambien el de nuestra institucion .
              </p>
            </article>
            <Image src={Bandera} className='Bandera'></Image>
        </div>

        <div className='EscudoS'>
        <article className='art-escudo'>
              <header><h2 className={alice.className}>Escudo</h2></header>
              <p>
                Primer campo superior izquierdo. Claustro colonial junto a él, el puente del Moro El Puente: Estructura sólida significa la unión entre el pueblo y el colegio; entre el colegio y la vida; el paso de la ignorancia al saber; el paso moderado entre los principios tradicionales enseñados a través de generaciones y las libertades que se pregonan en el mundo actual, buscando conservar la sensatez de la juventud, sin perder los valores arraigados en nuestra raza.<br/>
                <br/>
                Segundo campo superior derecho. La antorcha: Simboliza la fe en Dios, en sí mismo y en la patria.<br/>
                <br/>
                Tercer campo inferior. Libro abierto: El libro significa la búsqueda intelectual a la luz y protección de cristo, luz de luz.
              </p>
              <Image className='Eescudo' src={Escudo}></Image>
              <h3>Sabias que el escudo del colegio<br/>fue re diseñado en el año 2019</h3>
            </article>
        </div>

        <div className='HimnoS'>
        <article className='art-himno'>
              <header><h2 className={alice.className}>Himno</h2></header>
              <p>
              Juventud estudiosa y valiente<br/>
              Defended este templo de honor,<br/> 
              Es de Dios el más caro presente:<br/>
              Mi Colegio San Juan de Girón.<br/>
              <br/>
              Avancemos con paso seguro <br/>
              Que la virgen sonriente nos guía, <br/>
              Yuna estrella nos muestra el futuro <br/>
              Nuestra madre la Virgen María. <br/>
              <br/>
              De un obispo el ejemplo tenemos <br/>
              Que al profeta Isaías heredó <br/>
              Junto a él valeroso marchemos<br/>
              Por la ruta que el mismo marcó. <br/>
              <br/>
              Mi colegio es la sacra colmena <br/>
              De el trabajo mi fe purifica <br/>
              Ya ese Cristo que mi vida llena <br/>
              Por doquiera mi voz lo predica.<br/>

              </p>
            </article>
        </div>

      </section>
    </main>
  )
}

export default Simbolos
