'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../config/db');

var _db2 = _interopRequireDefault(_db);

var _Pokemon = require('../models/Pokemon');

var _Pokemon2 = _interopRequireDefault(_Pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = new (function () {
    function PokemonRepository() {
        _classCallCheck(this, PokemonRepository);
    }

    _createClass(PokemonRepository, [{
        key: 'getAll',
        value: function getAll() {
            return _Pokemon2.default.find();
        }
    }, {
        key: 'getById',
        value: function getById(id) {
            return _db2.default.findById(id);
        }
    }, {
        key: 'create',
        value: function create(pokemon) {
            return _db2.default.create(_db2.default);
        }
    }, {
        key: 'update',
        value: function update(id, pokemon) {

            var updatedpokemon = {
                name: pokemon.name,
                type: pokemon.type,
                species: pokemon.species,
                height: pokemon.height,
                abilities: pokemon.abilities,
                // image: ,

                baseStats: {
                    hp: pokemon.hp,
                    attack: pokemon.attack,
                    deffense: pokemon.deffense,
                    specialAttack: pokemon.specialAttack,
                    specialDefense: pokemon.specialDefense,
                    speed: pokemon.speed,
                    total: pokemon.total
                }
            };

            return _db2.default.findByIdAndUpdate(id, updatedpokemon, { new: true });
        }
    }, {
        key: 'delete',
        value: function _delete(id) {
            return _db2.default.findByIdAndRemove(id);
        }
    }]);

    return PokemonRepository;
}())();