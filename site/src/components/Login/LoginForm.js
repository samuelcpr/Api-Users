import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação simples dos campos de e-mail e senha
    if (!email || !senha) {
      setMensagemErro("Por favor, preencha todos os campos.");
      return;
    }

    // Cria o objeto com os dados de login
    const loginData = {
      email: email,
      senha: senha
    };

    try {
      // Substitua 'URL_DA_SUA_API' pela rota correta da sua API para o login
      const response = await axios.post('http://localhost:3333/login', loginData);
      // Login bem-sucedido, redireciona para a página desejada
      window.location.href = 'https://github.com/samuelcpr'; // Substitua pela página desejada após o login
    } catch (error) {
      // Exibe mensagem de erro no login
      setMensagemErro('Credenciais inválidas. Tente novamente.');
    }

    // Limpa o formulário após o envio
    setEmail('');
    setSenha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="senha"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block" style={{width: '105%'}}>
        Entrar
      </button>
      {mensagemErro && (
        <div className="mt-3 text-danger text-center">{mensagemErro}</div>
      )}
      <div id='link-login'>
        <a href='http://localhost:3000/cadastro?' id="text-footer">Cadastre-se aqui</a>
      </div>
    </form>
  );
};

export default LoginForm;
