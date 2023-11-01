import React, { useEffect, useState } from 'react';
import './global.css';
import Menutop from '../components/menutop';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  let player;

  const onYouTubeIframeAPIReady = () => {
    // Crie uma única instância do player
    player = new window.YT.Player('player', {
      height: '500',
      width: '1000',
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
  };

  const loadYouTubeVideo = (videoId) => {
    // Altere apenas o vídeo quando necessário
    player.loadVideoById(videoId);
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(100);
  };

  const handleAccordionClick = (videoId) => {
    // Use o videoId diretamente, remova o estado currentVideo
    loadYouTubeVideo(videoId);
  };
  return (
    <div id='container'>
      <Menutop />
      <div>
        <div id='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="conteudo-aula" style={{ display: 'block', padding: '0 0 0 5%' }}>
            <div className="titulo-curso" style={{ display: 'flex', justifyContent: 'center' }}>
              <h1>Programação web</h1>
            </div>

            <div id="player" style={{ borderRadius: '15px', border: 'solid 2px black', width: '1000px' }}></div>
          </div>
          <div style={{ width: '20%', padding: '10rem 0 0 1rem' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ display: 'block' }}>
                    <div onClick={() => handleAccordionClick('Om9v_xB-xGM')} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 1'}</span>
                    </div>
                    <div onClick={() => handleAccordionClick('7JvQJGCK-GI')} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 2'}</span>
                    </div>
                    <div onClick={() => handleAccordionClick('kNbTFOlt62Y')} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 3'}</span>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
