import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import './global.css';
import Aulas from '../components/Lista_aulas';
import Menutop from '../components/menutop';

const Course = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);

    script.onload = () => {
      onYouTubeIframeAPIReady();
    };

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  function onYouTubeIframeAPIReady() {
    const player = new window.YT.Player('player', {
      height: '500',
      width: '1000',
      videoId: 'Om9v_xB-xGM',
      playerVars: {
        controls: 1,
        showinfo: 0,
        rel: 0,
        modestbranding: 0,
        iv_load_policy: 1,
        autoplay: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }


  const onPlayerReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(100);
  };

  return (
    <div id='container' >
      <Menutop/>
      <div >
        <div id='barra-lateral'>
          {/* <Sidebar /> */}
        </div>

        <div id='container' style={{ display: 'flex', justifyContent:'center'}}>
          <div class="conetudo-aula" style={{ display: 'block', padding: '0 0 0 5%'}}>
            <div class="titulo-curso" style={{ display: 'flex', justifyContent: 'center' }}>
              <h1>Programaçã web</h1>
            </div>

            <div id="player" style={{ borderRadius: '15px', border: 'solid 2px black' }}></div>
          </div>
          <Aulas />
        </div>
      </div>
    </div>
  );
};

export default Course;
