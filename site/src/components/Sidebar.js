import React from 'react';
import { AiOutlineBook, AiOutlineComment, AiOutlineUser, AiOutlineDashboard, AiOutlineSupport } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <Link to="/">Curso</Link>
        <Link to="/contact">Fale com a gente</Link>
        <Link to="/account">Minha Conta</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/support">Suporte</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
