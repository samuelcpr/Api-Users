document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o redirecionamento após o envio do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value; // Adicione essa linha para capturar a senha do campo de senha

    // Cria o objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha // Adicione essa linha para enviar a senha no objeto de usuário
    };

    // Envia a requisição POST para a API
    const serverUrl = 'http://localhost:3333'; // Substitua pela URL correta do seu servidor
    fetch(`${serverUrl}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        // Exibe o resultado da criação do usuário na div com id "resultado"
        document.getElementById("resultado").innerHTML = `
            <p style="color:green">Usuário criado com sucesso:</p>
            
        `;
    })
//     document.getElementById("resultado").innerHTML = `
//     <p>Usuário criado com sucesso:</p>
//     <p><strong>Nome:</strong> ${data.nome}</p>
//     <p><strong>E-mail:</strong> ${data.email}</p>
// `;
// })
    .catch(error => {
        // Exibe mensagem de erro caso ocorra algum problema na requisição
        document.getElementById("resultado").innerHTML = '<p>Erro ao criar usuário.</p>';
    });

    // Limpa o formulário após o envio
    document.getElementById("formulario").reset();
});
