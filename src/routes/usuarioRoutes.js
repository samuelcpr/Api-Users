const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.post('/', UsuarioController.criarUsuario);
router.get('/', UsuarioController.listarUsuarios);
router.get('/:id', UsuarioController.buscarUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);
router.put('/:id', UsuarioController.atualizarUsuario);
router.patch('/:id', UsuarioController.atualizarUsuario);

console.log(UsuarioController)

module.exports = router;
