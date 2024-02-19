const Sequelize = require('sequelize')
const database = require('../src/db.js')

const feedback = database.define('avaliacoes',
{
    id_avaliacao:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    id_funcionario:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    valor_avaliacao:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    data_criacao:{
        type:Sequelize.DATEONLY,
        allowNull:false
    }
},
    {
        createdAt:false,
        updatedAt:false,
        timestamps:false
    }
)

module.exports = feedback