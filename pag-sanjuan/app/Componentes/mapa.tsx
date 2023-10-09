import React, {useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";




const mapa = () => {

  const coords = {lat: 7.06758469443197,lng: -73.16940446273308};
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})

function Mapa() {
    return <div className='container-mapa'>
        <GoogleMap zoom={17.5} center={coords} mapContainerClassName='container-mapa'></GoogleMap>
        <Marker position={{lat: 7.068147846428168, lng: -73.16891958222112}}></Marker>
    </div>
}


if(!isLoaded) {
return (
<div>cargando</div>
)
}
return (
       <Mapa/>
)
}

export default mapa


