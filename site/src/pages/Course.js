import React from 'react';
import Sidebar from '../components/Sidebar';
import './Accout.css'


const Course = () => {
  return (
    <div id='container'>
      <h2 id='title'>Nossos Cursos</h2>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <p>isso é um teste </p>
      </div>
    </div>
  );
};

export default Course;
