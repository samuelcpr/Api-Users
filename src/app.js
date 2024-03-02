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

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
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

// ... (restante do seu código para outras rotas e lógica)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
