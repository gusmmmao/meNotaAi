const Sequelize = require('sequelize')
const database = require('../src/db.js')

const team = database.define('equipes',
{
    id_equipe:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nome_equipe:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    setor:{
        type:Sequelize.STRING(200),
        allowNull:false
    }
},
    {
        createdAt:false,
        updatedAt:false,
        timestamps:false
    }
)

module.exports = team