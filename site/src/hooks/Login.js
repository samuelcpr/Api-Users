import React from 'react';
import axios from 'axios'; // Importe a biblioteca axios

// ... (restante do código do componente)

const CadastroForm = ({ nome, email, senha, mensagem, onChange, onSubmit }) => {

  // ...

  const handleSubmit = async (event) => {
    event.preventDefault();

    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    try {
      // Faz a requisição para a API usando o axios
      const response = await axios.post('http://localhost:3333/usuarios', novoUsuario);

      if (!response.data) {
        throw new Error('Resposta inválida da API');
      }

      setMensagem('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      // Trata os erros da requisição
      if (error.response) {
        setMensagem(error.response.data.error);
      } else {
        setMensagem('Erro ao cadastrar usuário.');
      }
    }
  };

  // ...

};
