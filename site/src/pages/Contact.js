import React from 'react';
import Sidebar from '../components/Sidebar';
import './global.css'
import Menutop from '../components/menutop';


const Contact = () => {
  return (
    <div id='container'>
        <Menutop/>
      <h2 id='title'>Fale com a gente</h2>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <p>isso é um teste </p>
      </div>
    </div>
  );
};

export default Contact;
