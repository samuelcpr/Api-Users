import React from 'react';
import Sidebar from '../components/Sidebar';
import './global.css';
import Menutop from '../components/menutop';
import Prova1Modal from '../components/Prova_html';


const Home = () => {
  return (
    <div id='container'>
      <Menutop />
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <Prova1Modal />
      </div>
    </div>
  );
};

export default Home;
