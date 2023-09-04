import React from 'react';
import Sidebar from '../components/Sidebar';
import './Accout.css'


const Account = () => {
  return (
    <div id='container'>
      <h2 id='title'>Minha Conta</h2>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <p>isso é um teste </p>
      </div>
    </div>
  );
};

export default Account;
