'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _pokemonRoute = require('./Routes/pokemonRoute');

var _pokemonRoute2 = _interopRequireDefault(_pokemonRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = (0, _express.Router)();

//Rotas


app.use((0, _bodyParser.urlencoded)({
    extended: true
}));

app.use((0, _bodyParser.json)());

app.use('/', _server2.default);
app.use('/pokemon', _pokemonRoute2.default);

exports.default = app;