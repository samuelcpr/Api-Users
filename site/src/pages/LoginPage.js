import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import '../components/Login/style.css'


const LoginPage = () => {
  return (
    <div className="container-main" style={{ width: '100%', display: 'flex',
    justifyContent:'center'}}>
      <div className='container'>
        <h2>Login de Usuário</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
