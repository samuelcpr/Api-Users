// Importando os módulos do React e do Material-UI
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Definindo o componente de Accordion
function Aulas() {
  return (
    
    <div style={{ width: '20%', padding:'10rem 0 0 1rem' }}>
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
              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 1</a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 2</a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 3</a>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div style={{ display: 'block' }}>
              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 1</a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 2</a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <input type="radio" id="resposta2" name="pergunta2" value="resposta2" style={{ width: '5%' }} />
                <a href='#' style={{ padding: '0 0 0 2%' }}>Aula 3</a>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}


export default Aulas;