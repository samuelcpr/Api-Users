import React from 'react';
import CadastroForm from '../components/Cadastro/CadastroUsuarioForm';
import '../components/Cadastro/style.css'


const CadastroPage = () => {
  return (
    <div className="container-main" style={{ width: '100%', display: 'flex',
    justifyContent:'center'}}>
      <div className='container'>
        <h2>Cadastro de Usuário</h2>
        <CadastroForm />
      </div>
    </div>
  );
};

export default CadastroPage;
