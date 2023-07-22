const Usuario = require('../models/Usuario');

const usuarios = [];

class UsuarioController {
  static criarUsuario(req, res) {
    const { nome, email } = req.body;
    const id = usuarios.length + 1;

    const novoUsuario = new Usuario(id, nome, email);
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
  
    // Encontre o usuário pelo ID no array "usuarios"
    const usuario = usuarios.find((usuario) => usuario.id === id);
  
    // Verifique se o usuário foi encontrado
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  
    // Atualize as propriedades do usuário com os novos valores
    usuario.nome = nome;
    usuario.email = email;
  
    // Retorne o usuário atualizado
    return res.json(usuario);
  }
}

module.exports = UsuarioController;
