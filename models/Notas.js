const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Notas = db.define('notas', {
    id_notas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    notaAtividadeLaboratorio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    notaProvaSemestre: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    
    notaTrabalhoTeorico: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    mediaFinal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    classificacaoFinal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

module.exports = Notas