const Sequelize = require('sequelize')
const database = require('../src/db.js')

const employee = database.define('funcionarios',
{
    id_funcionario:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nome_usuario:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    cargo:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    atividade:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    id_equipe:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
},
{
    timestamps:false,
    createdAt:false,
    updatedAt:false
}
)

module.exports = employee