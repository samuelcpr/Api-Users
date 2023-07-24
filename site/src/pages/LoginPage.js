import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação simples dos campos de e-mail e senha
    if (!email || !senha) {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    // Cria o objeto com os dados de login
    const loginData = {
      email: email,
      senha: senha,
    };

    // Envia a requisição POST para a API (substitua pela URL correta do seu servidor)
    const serverUrl = 'http://localhost:3333';
    try {
      const response = await fetch(`${serverUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas. Tente novamente.');
      }

      // Login bem-sucedido, redireciona para a página de perfil do GitHub
      window.location.href = 'https://github.com/samuelcpr';
    } catch (error) {
      // Exibe mensagem de erro no login
      setMensagemErro(error.message);
    }

    // Limpa o formulário após o envio
    setEmail('');
    setSenha('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-8 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <LoginForm
                email={email}
                senha={senha}
                onChange={(campo, valor) => {
                  campo === 'email' ? setEmail(valor) : setSenha(valor);
                }}
                onSubmit={handleSubmit}
                mensagemErro={mensagemErro}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
