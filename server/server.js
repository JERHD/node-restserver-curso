const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// require('./config/config');


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/usuarios', function(req, res) {
    res.send('GET usuarios');
});

app.post('/usuarios', function(req, res){
    let body = req.body;
    res.json({ body });
});

app.put('/usuarios/:id', function(req, res){
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuarios', function(req, res){
    res.send('DELETE usuarios')
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: `, 3000);
});