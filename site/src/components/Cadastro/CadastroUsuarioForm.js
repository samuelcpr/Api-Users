import React, { useState } from 'react';
import axios from 'axios';

const CadastroUsuario = () => {
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
      const response = await axios.post('http://localhost:3333/usuarios', usuario);
      setMensagem('Usuário criado com sucesso.');
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      if (error.response) {
        setMensagem('Erro ao criar usuário: ' + error.response.data.error);
      } else {
        setMensagem('Erro ao criar usuário.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
            required
          />
        </div>
        <button type="submit">Criar Usuário</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroUsuario;
