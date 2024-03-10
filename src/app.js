const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { Client } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: '127.0.0.1',
  port: 5432,
  database: 'banco_db_users',
  user: 'admin',
  password: 'admin',
}
const client = new Client(dbConfig);

class Usuario {
  constructor(id, nome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  verificarSenha(senha) {
    return bcrypt.compareSync(senha, this.senha);
  }
}

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
  );
`;


client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    // Execute a consulta para criar a tabela 'usuarios' se ela não existir
    return client.query(createTableQuery);
  })
  .then(() => {
    console.log('Table "usuarios" created or already exists');
  })
  .catch(err => console.error('Error connecting to PostgreSQL', err));

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Verifique se o e-mail já está cadastrado
    const result = await client.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const usuarioExistente = result.rows[0];

    if (usuarioExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criptografe a senha antes de armazenar
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Insira o novo usuário no banco de dados
    const insertQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *';
    const insertValues = [nome, email, hashedPassword];

    const resultInsert = await client.query(insertQuery, insertValues);
    const novoUsuario = resultInsert.rows[0];

    return res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});


app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const result = await client.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const usuario = new Usuario(result.rows[0].id, result.rows[0].nome, result.rows[0].email, result.rows[0].senha);

    if (!usuario.verificarSenha(senha)) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    return res.json({ message: 'Login bem-sucedido.' });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
