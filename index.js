const express = require('express');
const server = express();

server.get('/curso', (req, res) => {
    return res.json({ curso: 'node jS Com Express'});
});

server.listen(8080);