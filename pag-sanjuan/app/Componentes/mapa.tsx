import {React, useMemo} from 'react'
import {GoogleMap, InfoWindowF, MarkerF, useJsApiLoader, useLoadScript} from '@react-google-maps/api'; 
import "./Footer.css";



export default function mapa() {

    const { Cargado } = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,})

    const center = {
        lat: 7.067657834563287,
        lng: -73.16941769575803
      };

      const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


      return Cargado ? (
        <GoogleMap
          mapContainerStyle="mapa-contenedor"
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <>cargando</>
    
      
}


function Mapa(){
    return <GoogleMap zoom={10} center={{lat: 7.067657834563287, lng: -73.16941769575803}} mapContainerClassName="mapa-contenedor"/>
}