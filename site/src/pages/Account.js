import React from 'react';
import Sidebar from '../components/Sidebar';
import './global.css'
import Menutop from '../components/menutop';
import UserProfile from '../components/MeusDados';


const Account = () => {
  return (
    <div id='container'>
        <Menutop/>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo'>
        <UserProfile/>
      </div>
    </div>
  );
};

export default Account;
