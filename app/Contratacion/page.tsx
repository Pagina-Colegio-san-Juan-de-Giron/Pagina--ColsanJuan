'use client'

import React, { useState, useEffect } from 'react'
import "./Contratacion.scss"
import Overlay from "./Componentes/modal"

// Moví las interfaces fuera del componente para mejor legibilidad
interface LicitacionItem {
  name: string
  id: number
  items: LicitacionItem[]
  EsCarpeta: boolean
  path: string
}

interface RegistroFecha {
  id: number
  Fecha: string
  Nombre: string
}

const Page = () => {
  const [finished, setFinished] = useState<boolean>(false)
  const [estadoCerrados, setCerrados] = useState<boolean[]>([])
  const [closed, setClosed] = useState<string[]>([])
  const [fechasCierre, setFechasCierre] = useState<Record<string, Date>>({})
  const [licitaciones, setLic] = useState<LicitacionItem[]>([])

  const isClosed = (folderName: string) => {
    return closed.includes(folderName)
  }

  const handleCloseds = (folderName: string) => {
    setClosed((prev) => {
      if (prev.includes(folderName)) return prev
      return [...prev, folderName]
    })
  }

  const handleClick = (indice: number) => {
    setCerrados(prevState => {
      const nuevosEstados = [...prevState]
      nuevosEstados[indice] = !nuevosEstados[indice]
      return nuevosEstados
    })
  }

  // Carga de Licitaciones
  useEffect(() => {
    async function obtenerLic() {
      try {
        const response = await fetch('/api/Secretaria')
        const data = await response.json()
        
        if (Array.isArray(data)) {
          setLic(data)
          setCerrados(new Array(data.length).fill(false))
          setFinished(true)
        }
      } catch (err) {
        console.error("Error cargando licitaciones:", err)
      }
    }
    obtenerLic()
  }, [])

  // Carga de Fechas
  useEffect(() => {
    const obtenerFechaCierre = async () => {
      try {
        const response = await fetch('/api/Secretaria/Fechas/Consultar')
        const data = await response.json()

        // VALIDACIÓN CRÍTICA: Verificamos que data y data.registro existan antes del map
        if (data && Array.isArray(data.registro)) {
          const fechaMap: Record<string, Date> = {}
          data.registro.forEach((reg: RegistroFecha) => {
            fechaMap[reg.Nombre] = new Date(reg.Fecha)
          })
          setFechasCierre(fechaMap)
        } else {
          console.warn("La API no devolvió el formato esperado en 'registro':", data)
        }
      } catch (err) {
        console.error("Error en la llamada a la API de fechas:", err)
      }
    }
    obtenerFechaCierre()
  }, [])

  // Comparación de fechas para cerrar automáticamente
  useEffect(() => {
    if (licitaciones.length > 0 && Object.keys(fechasCierre).length > 0) {
      licitaciones.forEach((lic) => {
        const fechaCierreLic = fechasCierre[lic.name]
        const fechaActual = new Date()
        
        if (fechaCierreLic && fechaActual > fechaCierreLic) {
          handleCloseds(lic.name)
        }
      })
    }
  }, [licitaciones, fechasCierre])

  const obtenerValoresIniciales = (lic: LicitacionItem) => {
    const downloads = lic.items.filter(item => !item.EsCarpeta)
    return { downloads }
  }

  return (
    <main>
      <section className='contenedor-contratacion'>
        {licitaciones.map((lic, i) => {
          const initialPath = lic.path
          const { downloads } = obtenerValoresIniciales(lic)

          return (
            <React.Fragment key={lic.id}>
              <span 
                className='boton-contratacion' 
                onClick={() => handleClick(i)} // Usamos el índice real del array
              >
                {lic.name}
              </span>

              <Overlay 
                isClosed={isClosed} 
                FolderPath={initialPath} 
                InitFilename={downloads} 
                Name={lic.name} 
                Finished={finished} 
                cerrado={estadoCerrados[i]} 
                HandleClick={() => handleClick(i)}
              />
            </React.Fragment>
          )
        })}
      </section>
    </main>
  )
}

export default Page