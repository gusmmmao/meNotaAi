/* Custom Packages */
const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
/* --------------- */

/* Database/Connection files */
const database = require('./db.js')
const configuration = require('../config/config.js')
let connection = mysql.createConnection(configuration)
/* ------------------- */

/* Server configuration */
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
/* -------------------- */

/* Tables files */
const employee = require('../models/employee.js') // Terminar isso aqui mais tarde
const team = require('../models/team.js') // Terminar isso aqui mais tarde
/* ------------ */

/* Requests */
// Request básico de teste
app.get('/', (req, res) => {
    res.send('Servidor está disponível, só trabalhar!');
});

// Post
app.post('/cadastrar/equipe', async (req, res) => {
    try {
        await database.sync()
        const { nome_equipe, setor } = req.body
        await team.create({ nome_equipe, setor })
        return res.status(201).json({ message: 'Equipe cadastrada com sucesso!' })
    } catch (error) {
        return res.status(400).json(error)
    }
})
app.post('/cadastrar/funcionario', async (req, res) => {
    try {
        await database.sync()
        const { nome_usuario, email, cargo, atividade, id_equipe } = req.body
        await employee.create({ nome_usuario, email, cargo, atividade, id_equipe })
        return res.status(201).json({ message: 'Funcionário cadastrado com sucesso!' })
    } catch (error) {
        return res.status(400).json(error)
    }
})


/* -------- */


/* Running constraints */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
/* ------------------- */