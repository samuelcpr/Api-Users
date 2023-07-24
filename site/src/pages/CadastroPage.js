import React from 'react';
import CadastroForm from '../components/Cadastro/CadastroUsuarioForm';
import { Container } from '../style/style';


const CadastroPage = () => {
  return (
    <div className="container mt-5" style={{ width: '40%' }}>
      <Container>
        <h2>Cadastro de Usuário</h2>
        <CadastroForm />
      </Container>
    </div>
  );
};

export default CadastroPage;
