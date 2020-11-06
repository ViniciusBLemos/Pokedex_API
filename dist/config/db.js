'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

(0, _mongoose.connect)('mongodb://127.0.0.1/db_employees');

var Schema = _mongoose.Schema;

var pokemonSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var Pokemon = (0, _mongoose.model)('Pokemon', pokemonSchema);
exports.default = Pokemon;