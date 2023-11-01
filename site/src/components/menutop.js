import React from 'react';
import { Link } from 'react-router-dom';
import MinhaImagem from './image/image1.png'
import './style/menutop.css';

const Menutop = () => {
  return (
    <div id='menutop' style={{backgroundColor:'#F0F2F5', borderBottom:'solid 2px #E2E2E1'}}>
      <div id='listcourse'>
        <div id='logo'>
          <img src={MinhaImagem} alt="Descrição da imagem" style={{height:'150px'}} />
        </div>

        <div id='menu-menu'>
          <Link to="/Home">
            Inicio
          </Link>
          <Link to="/">
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
