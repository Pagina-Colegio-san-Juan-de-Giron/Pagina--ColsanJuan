import React, {useEffect, useState} from 'react';
import Folders from "./componentes/Folders"

interface ExplorerItem {
  id: number;
  EsCarpeta: boolean;
  name: string;
  items: ExplorerItem[];
  path: string;
  IsLic: boolean;
  ParentFolder: string;
  GrandParentFolder: string;
}


const modal = ({ Nombre ,cerrado, HandleClick }: { Nombre: string; cerrado: boolean; HandleClick: () => void }) => {

const [explorer, setexplorer] = useState<ExplorerItem[]>();


  useEffect(() => {
    async function obtenerdirs() {
      const response = await fetch('/api/Secretaria/Clases');
      const data = await response.json();
      console.log(data);
      if(data) {
        setexplorer(data);
      }
      console.log(explorer)
  }

  obtenerdirs();
  }, []);




  return (
    <>
        <div className={`overlay ${cerrado ? 'hidden anim_fade-out' : 'showed'}`}>
            <div className={`contenedor-modal ${cerrado ? 'hidden-content anim_fade-outmove' : ''}`}>
                <header className='titulo-modal'>
                    <h2>
                        {Nombre}
                    </h2>
                </header>
                <span className='boton-cerrar' onClick={HandleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </span>

                <section className='content'>
                        <h1>Explorador de propuestas</h1>
                        <form className='upload'>


                         <Folders explorer={explorer as ExplorerItem[]}/>

                        </form>
                </section>
            </div>
        </div> 
    </>
  );
}

export default modal
