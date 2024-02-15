const { Sequelize } = require("sequelize")
const database = new Sequelize('meNotaAiBdD', 'root', 'root', {
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = database