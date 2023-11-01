import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MinhaImagem from './image/image1.png'
import { AiOutlineBook, AiOutlineComment, AiOutlineUser, AiOutlineDashboard, AiOutlineRight } from 'react-icons/ai';
import './style/sidebar.css';

const Sidebar = () => {
  return (
    
    <aside>
      <div id='logo'>
          <img src={MinhaImagem} alt="Descrição da imagem" style={{height:'150px'}} />
        </div>
      <nav >
        <NavLink to="/dashboard">
          <AiOutlineDashboard /> Dashboard
        </NavLink>
        <NavLink to="/course">
          <AiOutlineBook /> Curso
        </NavLink>
        <NavLink to="/contact">
          <AiOutlineComment /> Fale com a gente
        </NavLink>
        <NavLink to="/account">
          <AiOutlineUser /> Minha Conta
        </NavLink>

        <NavLink to="/support">
          <AiOutlineRight /> Suporte
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
