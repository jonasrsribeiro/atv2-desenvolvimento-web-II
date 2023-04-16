const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'atvii',
    define: {
        timestamps: true,
        freezeTableName: true
      },
})

module.exports = sequelize