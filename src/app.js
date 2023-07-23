const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;

    // Verifique se o e-mail já está cadastrado
    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
        return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criptografe a senha antes de armazenar
    bcrypt.hash(senha, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar usuário.' });
        }

        // Crie o novo usuário
        const id = usuarios.length + 1;
        const novoUsuario = {
            id: id,
            nome: nome,
            email: email,
            senha: hash // Armazene a senha criptografada
        };

        // Adicione o novo usuário ao array de usuários
        usuarios.push(novoUsuario);

        return res.status(201).json(novoUsuario);
    });
});

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
    return res.json(usuarios);
});

// Rota para buscar um usuário por ID
app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(usuario);
});

// Rota para deletar um usuário por ID
app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuarios.splice(index, 1);
    return res.sendStatus(204);
});

// Rota para atualizar os dados de um usuário por ID
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;

    const usuario = usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuario.nome = nome;
    usuario.email = email;

    return res.json(usuario);
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const usuario = usuarios.find((usuario) => usuario.email === email);
    if (!usuario) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    bcrypt.compare(senha, usuario.senha, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao verificar credenciais.' });
        }

        if (!result) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }

        return res.json({ message: 'Login bem-sucedido.' });
    });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
