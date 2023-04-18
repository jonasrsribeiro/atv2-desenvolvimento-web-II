const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuarios = db.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    sobrenome: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    email: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    idade: {
        type: DataTypes.CHAR,
        allowNull: true
    },

    nacionalidade: {
        type: DataTypes.CHAR,
        allowNull: true
    }
})

module.exports = Usuarios