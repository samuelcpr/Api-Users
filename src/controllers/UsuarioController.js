const { Client } = require('pg');
const Usuario = require('../models/Usuario');

// PostgreSQL connection configuration
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

const usuarios = [];

class UsuarioController {
  // ... (unchanged methods)

  static async criarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const result = await client.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, senha]
      );

      const novoUsuario = new Usuario(result.rows[0].id, result.rows[0].nome, result.rows[0].email, result.rows[0].senha);
      usuarios.push(novoUsuario);

      return res.status(201).json(novoUsuario);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async listarUsuarios(req, res) {
    try {
      const result = await client.query('SELECT * FROM usuarios');
      const usuarios = result.rows.map(row => new Usuario(row.id, row.nome, row.email, row.senha));
      return res.json(usuarios);
    } catch (error) {
      console.error('Error listing users:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // ... (similar updates for other CRUD operations)

  static async loginUsuario(req, res) {
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
  }
}

module.exports = UsuarioController;
