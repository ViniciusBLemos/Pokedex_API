'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokemonSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    species: { type: String, required: true },
    height: { type: Number, required: true },
    ablities: { type: String, required: true }
});

exports.default = _mongoose2.default.model('Pokemon', PokemonSchema);