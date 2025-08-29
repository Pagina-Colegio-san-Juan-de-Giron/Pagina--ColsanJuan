import React from 'react'
import Youtube, { YouTubeProps } from 'react-youtube'


const VideoYT = () => {

    const ReproductorFuncionando: YouTubeProps['onReady'] = (event) => {
       event.target.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
    
        playerVars: {
            autoPlay: 1,
        },
    };

  return (
    <div className='container-video'>
        <Youtube videoId="7oEdm_pZlNM" opts={opts} onReady={ReproductorFuncionando}/>
    </div>
  )
}

export default VideoYT
