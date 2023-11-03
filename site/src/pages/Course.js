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
  const [lessonCompleted, setLessonCompleted] = useState({
    'Om9v_xB-xGM': false,
    '7JvQJGCK-GI': false,
    'kNbTFOlt62Y': false,
    
  });

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
    const ytPlayer = new window.YT.Player('player-container', { // Updated ID to match the container
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
      setLessonCompleted((prevLessonCompleted) => ({
        ...prevLessonCompleted,
        [selectedAula]: true,
      }));
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
    // No need to reset lesson completion status here
  };

  return (
    <div id='course-container'> {/* Use a unique ID for the course container */}
      <Menutop />
      <div>
        <div id='content-container' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="conteudo-aula" style={{ display: 'block', padding: '0 0 0 5%' }}>
            <div className="titulo-curso" style={{ display: 'flex', justifyContent: 'center' }}>
              <h1 style={{ backgroundColor: lessonCompleted[selectedAula] ? 'green' : 'inherit' }}>Programação web</h1>
            </div>

            <div id="player-container" style={{ borderRadius: '15px', border: 'solid 2px black', width: '1000px' }}></div>
          </div>
          <div style={{ width: '20%', padding: '10rem 0 0 1rem' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Auluas de html</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ display: 'block' }}>
                    <div
                      onClick={() => handleAccordionClick('Om9v_xB-xGM')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['Om9v_xB-xGM'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_Om9v_xB-xGM`}
                        name="pergunta2"
                        value={`resposta2_Om9v_xB-xGM`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'Om9v_xB-xGM'}
                        onChange={() => {}}
                        disabled={lessonCompleted['Om9v_xB-xGM']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 1'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('7JvQJGCK-GI')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['7JvQJGCK-GI'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_7JvQJGCK-GI`}
                        name="pergunta2"
                        value={`resposta2_7JvQJGCK-GI`}
                        style={{ width: '5%' }}
                        checked={selectedAula === '7JvQJGCK-GI'}
                        onChange={() => {}}
                        disabled={lessonCompleted['7JvQJGCK-GI']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 2'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('kNbTFOlt62Y')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['kNbTFOlt62Y'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_kNbTFOlt62Y`}
                        name="pergunta2"
                        value={`resposta2_kNbTFOlt62Y`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'kNbTFOlt62Y'}
                        onChange={() => {}}
                        disabled={lessonCompleted['kNbTFOlt62Y']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 3'}</span>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Auluas de css</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ display: 'block' }}>
                    <div
                      onClick={() => handleAccordionClick('Om9v_xB-xGM')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['Om9v_xB-xGM'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_Om9v_xB-xGM`}
                        name="pergunta2"
                        value={`resposta2_Om9v_xB-xGM`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'Om9v_xB-xGM'}
                        onChange={() => {}}
                        disabled={lessonCompleted['Om9v_xB-xGM']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 1'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('7JvQJGCK-GI')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['7JvQJGCK-GI'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_7JvQJGCK-GI`}
                        name="pergunta2"
                        value={`resposta2_7JvQJGCK-GI`}
                        style={{ width: '5%' }}
                        checked={selectedAula === '7JvQJGCK-GI'}
                        onChange={() => {}}
                        disabled={lessonCompleted['7JvQJGCK-GI']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 2'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('kNbTFOlt62Y')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['kNbTFOlt62Y'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_kNbTFOlt62Y`}
                        name="pergunta2"
                        value={`resposta2_kNbTFOlt62Y`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'kNbTFOlt62Y'}
                        onChange={() => {}}
                        disabled={lessonCompleted['kNbTFOlt62Y']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 3'}</span>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Auluas de javascript</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ display: 'block' }}>
                    <div
                      onClick={() => handleAccordionClick('Om9v_xB-xGM')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['Om9v_xB-xGM'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_Om9v_xB-xGM`}
                        name="pergunta2"
                        value={`resposta2_Om9v_xB-xGM`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'Om9v_xB-xGM'}
                        onChange={() => {}}
                        disabled={lessonCompleted['Om9v_xB-xGM']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 1'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('7JvQJGCK-GI')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['7JvQJGCK-GI'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_7JvQJGCK-GI`}
                        name="pergunta2"
                        value={`resposta2_7JvQJGCK-GI`}
                        style={{ width: '5%' }}
                        checked={selectedAula === '7JvQJGCK-GI'}
                        onChange={() => {}}
                        disabled={lessonCompleted['7JvQJGCK-GI']}
                      />
                      <span style={{ padding: '0 0 0 2%' }}>{'Aula 2'}</span>
                    </div>
                    <div
                      onClick={() => handleAccordionClick('kNbTFOlt62Y')}
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        backgroundColor: lessonCompleted['kNbTFOlt62Y'] ? 'green' : 'inherit',
                      }}
                    >
                      <input
                        type="radio"
                        id={`resposta2_kNbTFOlt62Y`}
                        name="pergunta2"
                        value={`resposta2_kNbTFOlt62Y`}
                        style={{ width: '5%' }}
                        checked={selectedAula === 'kNbTFOlt62Y'}
                        onChange={() => {}}
                        disabled={lessonCompleted['kNbTFOlt62Y']}
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
