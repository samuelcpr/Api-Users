const Usuario = require('../models/Usuario');

const usuarios = [];

class UsuarioController {
  static criarUsuario(req, res) {
    const { nome, email, senha } = req.body;
    const id = usuarios.length + 1;

    const novoUsuario = new Usuario(id, nome, email, senha);
    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
  }

  static listarUsuarios(req, res) {
    return res.json(usuarios);
  }

  static buscarUsuario(req, res) {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(usuario);
  }

  static deletarUsuario(req, res) {
    const id = parseInt(req.params.id);

    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuarios.splice(index, 1);
    return res.sendStatus(204);
  }

  static atualizarUsuario(req, res) {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;

    const usuario = usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuario.nome = nome;
    usuario.email = email;

    return res.json(usuario);
  }

  static loginUsuario(req, res) {
    const { email, senha } = req.body;

    const usuario = usuarios.find((usuario) => usuario.email === email);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    if (!usuario.verificarSenha(senha)) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    return res.json({ message: 'Login bem-sucedido.' });
  }
}

module.exports = UsuarioController;
