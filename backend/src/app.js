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

app.get('/', (req, res) => {
    res.send('Servidor está disponível, só trabalhar!');
});

app.get('/test', (req, res) => {
    res.send('Teste feito');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
