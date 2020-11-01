const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

//Rotas
const index = require('./server');
const pokemonRoute = require('./pokemonRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use('/', index);
app.use('/pokemon', pokemonRoute);

module.exports = app;