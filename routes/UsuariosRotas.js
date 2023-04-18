const router = require('express').Router()

const UsuariosController = require('../controllers/UsuariosController')

router.get('/cadastro', UsuariosController.lerUsuarios)

router.post('/usuario', UsuariosController.criarUsuarios)

module.exports = router