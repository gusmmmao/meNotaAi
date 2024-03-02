/* Custom Packages */
const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
const http = require('http')
/* --------------- */

const server = http.createServer((req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.end()
})

/* CORS */
const corsOptions = {
    origin: 'http://127.0.0.1',
    optionsSucessStatus: 200
}
/* ---- */

/* Database/Connection files */
const database = require('./db.js')
const configuration = require('../config/config.js')
let connection = mysql.createConnection(configuration)
/* ------------------- */

/* Server configuration */
const app = express()
const port = 3001
app.use(express.json())
// app.use(cors())
/* -------------------- */

/* Tables files */
const employee = require('../models/employee.js')
const team = require('../models/team.js')
const feedback = require('../models/feedback.js')
/* ------------ */

/* Middlewares */
const equipe_existe = async (req, res, next) => {
    const { nome_equipe } = req.body;
    let equipe_existente = await team.findAll({where:{nome_equipe : nome_equipe}})
    /*
    //Não faço a mínima ideia do porquê de não ter funcionado
    switch(equipe_existente){
        case equipe_existente.length > 0:return res.status(400).json({ error:'Já existe uma equipe com esse nome!'})
        default:next()
    }*/
    if(equipe_existente.length > 0){
        return res.status(400).json({ error:'Já existe uma equipe com esse nome!'})
    }
    else{
        next()
    }
}
const funcionario_existe = async (req, res, next) => {
    const { nome_usuario } = req.body;
    let funcionario_existente = await employee.findAll({where:{nome_usuario:nome_usuario}})
    if(funcionario_existente.length > 0){
        return res.status(400).json({error:'Já existe um funcionário com esse nome!'})
    }
    else{
        next()
    }
}
/* ----------- */

/* Requests */
// Request básico de teste
app.get('/', cors(), (req, res) => {
    res.send('Servidor está disponível, só trabalhar!');
});

// Post
app.post('/cadastrar/equipe', equipe_existe, async (req, res) => {
    try {
        await database.sync()
        const { nome_equipe, setor } = req.body
        await team.create({ nome_equipe, setor })
        return res.status(201).json({ message: 'Equipe cadastrada com sucesso!' })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})
app.post('/cadastrar/funcionario', funcionario_existe, async (req, res) => {
    try {
        await database.sync()
        const { nome_usuario, email, cargo, atividade, id_equipe } = req.body
        await employee.create({ nome_usuario, email, cargo, atividade, id_equipe })
        return res.status(201).json({ message: 'Funcionário cadastrado com sucesso!' })
    } catch (error) {
        return res.status(400).json(error)
    }
})
app.post('/avaliar/funcionario', async (req, res) => {
    try {
        await database.sync()
        const { id_funcionario, valor_avaliacao, data_criacao } = req.body
        await feedback.create({ id_funcionario, valor_avaliacao, data_criacao })
        return res.status(201).json({ message: 'Avaliação realizada com sucesso!'})
    } catch (error) {
        return res.status(400).json(error)   
    }
})

/* -------- */


/* Running constraints */
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
/* ------------------- */