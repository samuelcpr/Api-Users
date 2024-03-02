import React from 'react';
import { Link } from 'react-router-dom';
import MinhaImagem from './image/image1.png'
import './style/menutop.css';

const Menutop = () => {
  return (
    <div id='menutop' style={{ backgroundColor: '#F0F2F5', borderBottom: 'solid 2px #E2E2E1' }}>
      <div id='listcourse'>
        <div id='logo'>
          <a href='http://localhost:3000/dashboard' style={{borderBottom:'none'}}>
            <img src={MinhaImagem} alt="Descrição da imagem" style={{ height: '90px', padding:'5% 2% 5% 0' }} />
          </a>
        </div>

        <div id='menu-menu'>
          <Link to="/dashboard">
            Inicio
          </Link>
          <Link to="/Home">
            Provas
          </Link>
          <Link to="/">
            Minha Conta
          </Link>
          <Link to="/">
            Fale com a gente
          </Link>
          <Link to="/">
            Suporte
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Menutop;
