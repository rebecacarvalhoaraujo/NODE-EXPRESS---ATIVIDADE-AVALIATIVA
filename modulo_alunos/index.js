const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const alunos = require('./alunos');

app.use(express.json());

// GET /alunos
app.get('/alunos', (req, res) => {
let resultado = alunos.alunos;

if (req.query.nome) {
resultado = alunos.filtrarPorNome(req.query.nome);
}

if (req.query.media) {
resultado = alunos.filtrarPorMedia(req.query.media);
}

res.send(resultado);
});