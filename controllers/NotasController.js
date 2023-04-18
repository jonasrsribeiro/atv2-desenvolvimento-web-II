const Notas = require('../models/Notas')

module.exports = class NotasControllers {

    static async criarNotas(req, res) {
        const notaAtividadeLaboratorio = parseFloat(req.body.nota_atv_pratica)
        const notaProvaSemestre = parseFloat(req.body.nota_prova_semestre)
        const notaTrabalhoTeorico = parseFloat(req.body.nota_trabalho_teorico)
        let classificacaoFinal = ''

        const mediaFinal = (((notaAtividadeLaboratorio * 2) + (notaProvaSemestre * 5) + (notaTrabalhoTeorico * 3)) / 10)

        if (mediaFinal >= 0 && mediaFinal <= 5){
            classificacaoFinal = 'F'
        } else if (mediaFinal > 5 && mediaFinal <= 6){
            classificacaoFinal = 'E'
        } else if (mediaFinal > 6 && mediaFinal <= 7){
            classificacaoFinal = 'D'
        } else if (mediaFinal > 7 && mediaFinal <= 8){
            classificacaoFinal = 'C'
        } else if (mediaFinal > 8 && mediaFinal <= 9){
            classificacaoFinal = 'B'
        } else{
            classificacaoFinal = 'A'
        }

        try {
            const novaNota = await Notas.create({
                notaAtividadeLaboratorio,
                notaProvaSemestre,
                notaTrabalhoTeorico,
                mediaFinal,
                classificacaoFinal
            })

            res.render('calculoNotas', {notaAtividadeLaboratorio: novaNota.notaAtividadeLaboratorio, notaProvaSemestre: novaNota.notaProvaSemestre,
                notaTrabalhoTeorico: novaNota.notaTrabalhoTeorico, mediaFinal: novaNota.mediaFinal, classificacaoFinal: novaNota.classificacaoFinal})
                
        } catch (error) {
            // Tratar erros de criação no banco de dados
            console.error(error)
            res.status(500).send('Erro ao criar notas.')
        }
    }

    static async lerNotas(req, res) {
        res.render('indexNotas')
    }
}