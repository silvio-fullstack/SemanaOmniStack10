// api rest full
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://silvio:Arqui12!@cluster0-0cfvw.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // entender requisicoes json
app.use(router);
// Metodos http : get, post, put, delete

// Tipos de Parametros

// Query Params;  request.query (filtros, ordenação,paginação ...)
// Route Params;  request.params (identificar um recursona alteração ou remocao)
// Body; (post,put) (json) corpo em json {} request.body

// MongoDB (Não relacional)
// mongodb+srv://silvio:Arqui12!@cluster0-0cfvw.gcp.mongodb.net/test?retryWrites=true&w=majority


app.listen(3333);