import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const CadastroUsuarioForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    try {
      // Substitua 'URL_DA_SUA_API' pela rota correta da sua API que recebe os dados do formulário.
      const response = await axios.post('http://localhost:3333/usuarios', usuario);
      setMensagem('Usuário criado com sucesso.');
      setNome('');
      setEmail('');
      setSenha('');
      
      // Redireciona para a página de login após criar o usuário
      window.location.href = 'http://localhost:3000/';
    } catch (error) {
      if (error.response) {
        setMensagem('Erro ao criar usuário: ' + error.response.data.error);
      } else {
        setMensagem('Erro ao criar usuário.');
      }
    }
  };

  return (
    <div className="container-main">
      <div className="container">
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o seu e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a sua senha"
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
        <div className="link-container">
          <a href="http://localhost:3000/" className="link-login">
            Já tem uma conta? Faça login aqui.
          </a>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuarioForm;
