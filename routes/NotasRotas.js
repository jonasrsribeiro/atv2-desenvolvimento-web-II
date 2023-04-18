const router = require('express').Router()

const NotasController = require('../controllers/NotasController')

router.get('/cadastro', NotasController.lerNotas)

router.post('/notas', NotasController.criarNotas)

module.exports = router