const express = require('express');
const server = express();

const cursos = ['Desenvolvimento WEB', 'Programacao Desktop', 'Desenvolvimento Mobile', 'Internet Das Coisas', 'Hardware', 'Redes E Servidores'];

server.get('/curso', (req, res) => {
    return res.json(cursos);
});

server.get('/curso/:index', (req, res) => {
    const { index }= req.params;
    return res.json(cursos[index]);
});

server.listen(3000);