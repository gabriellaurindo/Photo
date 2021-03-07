const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');


//Usar Rota
app.use('/', index);

//Exportar módulo
module.exports = app;