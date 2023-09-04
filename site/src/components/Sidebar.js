import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineComment, AiOutlineUser, AiOutlineDashboard, AiOutlineRight } from 'react-icons/ai';
import './style/sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <nav>

      <Link to="/dashboard">
          <AiOutlineDashboard /> Dashboard
        </Link>
        <Link to="/course">
          <AiOutlineBook /> Curso
        </Link>
        <Link to="/contact">
          <AiOutlineComment /> Fale com a gente
        </Link>
        <Link to="/account">
          <AiOutlineUser /> Minha Conta
        </Link>
       
        <Link to="/support">
          <AiOutlineRight /> Suporte
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
