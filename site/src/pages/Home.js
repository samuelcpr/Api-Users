import React from 'react';
import Sidebar from '../components/Sidebar';
import './Accout.css'


const Home = () => {
  return (
    <div id='container'>
      <h2 id='title'>Home</h2>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <p>isso é um teste </p>
      </div>
    </div>
  );
};

export default Home;
