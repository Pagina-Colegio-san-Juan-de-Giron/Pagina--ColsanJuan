import React from 'react'
import "./simbolos.scss"
import Image from 'next/image'

const Simbolos = () => {
  return (
    <main>
      <header className='Título'>Simbolos</header>
      <section className='grid-template'>
        <div className='BanderaS'>
            <article className='art-bandera'>
              <header><h2>Bandera</h2></header>
              <p>
                El color blanco hace alusión a la luz de la sabiduría y de la verdad que imparte nuestro colegio en las mentes de todos sus educandos. La paz por encima de todo ese es el significado de no solo nuestra bandera sino tambien el de nuestra institucion .
              </p>
            </article>
            <Image></Image>
        </div>

        <div className='EscudoS'>

        </div>

        <div className='HimnoS'>
        <article className='art-himno'>
              <header><h2>Himno</h2></header>
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
              Do el trabajo mi fe purifica <br/>
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
