import React, { useState } from 'react';
import { Container } from '../../style/style';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [resultadoCadastro, setResultadoCadastro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cria o objeto com os dados do usuário
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    // Envia a requisição POST para a API
    const serverUrl = 'http://localhost:3333'; // Substitua pela URL correta do seu servidor
    try {
      const response = await fetch(`${serverUrl}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      // Exibe o resultado da criação do usuário na div com id "resultado"
      setResultadoCadastro('Usuário criado com sucesso:');
      // Limpa os campos do formulário após o cadastro
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      // Exibe mensagem de erro caso ocorra algum problema na requisição
      setResultadoCadastro('Erro ao criar usuário.');
    }
  };

  return (
    <Container className="container mt-5" style={{ width: '40%' }}>
      <div>
        <h2>Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o e-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Criar Usuário
          </button>
        </form>
      </div>
      <div className="mt-3" id="resultado">
        {resultadoCadastro && (
          <div className="alert alert-success">{resultadoCadastro}</div>
        )}
      </div>
    </Container>
  );
};

export default CadastroPage;
