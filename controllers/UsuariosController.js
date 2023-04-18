const Usuarios = require('../models/Usuarios')

module.exports = class UsuariosControllers {

    static async criarUsuarios(req, res) {
        const nomeUsuarioCadastro = req.body.nome
        const sobrenomeUsuarioCadastro = req.body.sobrenome
        const emailUsuarioCadastro = req.body.email
        const idadeUsuarioCadastro = req.body.idade
        const nacionalidadeUsuarioCadastro = req.body.nacionalidade
       
        try {
            const novoUsuario = await Usuarios.create({
                nome: nomeUsuarioCadastro, 
                sobrenome: sobrenomeUsuarioCadastro,
                email: emailUsuarioCadastro, 
                idade: idadeUsuarioCadastro, 
                nacionalidade: nacionalidadeUsuarioCadastro
            })

            res.render('cadastroCompleto', {nomeUsuarioCadastro: novoUsuario.nome, sobrenomeUsuarioCadastro: novoUsuario.sobrenome, emailUsuarioCadastro: novoUsuario.email, idadeUsuarioCadastro: novoUsuario.idade, nacionalidadeUsuarioCadastro: novoUsuario.nacionalidade})
                
        } catch (error) {
            // Tratar erros de criação no banco de dados
            console.error(error)
            res.status(500).send('Erro ao criar usuário.')
        }

    }

    static async lerUsuarios(req, res) {
        res.render('indexCadastro')
    }
}