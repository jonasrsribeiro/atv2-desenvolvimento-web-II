const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const conexao = require('./db/conn')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
/* app.use(bodyParser.json()) */

//Rotas - invocando depois usando a rota
const UsuariosRotas = require('./routes/UsuariosRotas')
const NotasRotas = require('./routes/NotasRotas')

app.use('/usuario', UsuariosRotas)
app.use('/notas', NotasRotas)

app.get('/', function(req, res) {
    res.render('indexPrincipal')
})

app.post('/', function(req, res) {
    res.render('/notas', NotasRotas)
    res.render('/usuario', UsuariosRotas)
})


conexao.sync().then(() => {
    app.listen(3001)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})