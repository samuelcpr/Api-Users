import React, { useEffect, useState } from 'react';
import './global.css';
import Menutop from '../components/menutop';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Course = () => {
  const [player, setPlayer] = useState(null);
  const [selectedAula, setSelectedAula] = useState('Om9v_xB-xGM'); // Initialize with the first video ID
  const [lessonCompleted, setLessonCompleted] = useState(false);

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

  const onYouTubeIframeAPIReady = () => {
    const ytPlayer = new window.YT.Player('player', {
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
        onStateChange: onPlayerStateChange,
      },
    });

    setPlayer(ytPlayer);
  };

  const onPlayerReady = (event) => {
    if (player) {
      event.target.loadVideoById(selectedAula); // Load the initial video
      event.target.setVolume(100);
    } else {
      console.error('Player is not defined');
    }
  };

  const onPlayerStateChange = (event) => {
    if (event.data === 0) {
      setLessonCompleted(true);
    }
  };

  const loadYouTubeVideo = (videoId) => {
    if (player) {
      player.loadVideoById(videoId);
    } else {
      console.error('Player is not defined');
    }
  };

  const handleAccordionClick = (videoId) => {
    loadYouTubeVideo(videoId);
    setSelectedAula(videoId);
    setLessonCompleted(false); // Reset lesson completion status
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
                      <input
                        type="radio"
                        id={`resposta2_Om9v_xB-xGM`}
                        name="pergunta2"
                        value={`resposta2_Om9v_xB-xGM`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'Om9v_xB-xGM'}
                        onChange={() => {}}
                        disabled={lessonCompleted}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 1'}</span>
                    </div>
                    <div onClick={() => handleAccordionClick('7JvQJGCK-GI')} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <input
                        type="radio"
                        id={`resposta2_7JvQJGCK-GI`}
                        name="pergunta2"
                        value={`resposta2_7JvQJGCK-GI`}
                        style={{ width: '5%' }}
                        checked={selectedAula === '7JvQJGCK-GI'}
                        onChange={() => {}}
                        disabled={lessonCompleted}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 2'}</span>
                    </div>
                    <div onClick={() => handleAccordionClick('kNbTFOlt62Y')} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                      <input
                        type="radio"
                        id={`resposta2_kNbTFOlt62Y`}
                        name="pergunta2"
                        value={`resposta2_kNbTFOlt62Y`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'kNbTFOlt62Y'}
                        onChange={() => {}}
                        disabled={lessonCompleted}
                      />
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
