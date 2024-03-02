import { useState } from 'react';

const useCadastroForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Crie um objeto com os dados do novo usuário
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    try {
      // Faça a requisição para a API de cadastro de usuário
      const response = await fetch('http://localhost:3333/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      setMensagem('Usuário cadastrado com sucesso!');
      // Limpa os campos do formulário após o cadastro
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      setMensagem(error.message);
    }
  };

  return {
    nome,
    email,
    senha,
    mensagem,
    setNome,
    setEmail,
    setSenha,
    handleSubmit,
  };
};

export default useCadastroForm;
