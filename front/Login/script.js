document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o redirecionamento após o envio do formulário
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Validação simples dos campos de e-mail e senha
    if (!email || !senha) {
      document.getElementById("mensagemErro").innerText = "Por favor, preencha todos os campos.";
      return;
    }
  
    // Cria o objeto com os dados de login
    const loginData = {
      email: email,
      senha: senha
    };
  
    // Envia a requisição POST para a API
    const serverUrl = 'http://localhost:3333'; // Substitua pela URL correta do seu servidor
    fetch(`${serverUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Credenciais inválidas. Tente novamente.');
      }
      return response.json();
    })
    .then(() => {
      // Login bem-sucedido, redireciona para a página de perfil do GitHub
      window.location.href = 'https://github.com/samuelcpr';
    })
    .catch(error => {
      // Exibe mensagem de erro no login
      document.getElementById("mensagemErro").innerText = error.message;
    });
  
    // Limpa o formulário após o envio
    document.getElementById("loginForm").reset();
  });
