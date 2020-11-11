'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokemonSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    type: { type: Array, required: true },
    species: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    abilities: { type: Array, required: true },
    // imagem
    baseStats: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        specialAttack: { type: Number, required: true },
        specialDefense: { type: Number, required: true },
        speed: { type: Number, required: true },
        total: { type: Number, required: true }
    }
});

exports.default = _mongoose2.default.model('Pokemon', PokemonSchema);