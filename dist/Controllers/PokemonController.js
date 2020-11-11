'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _pokemonsRepository = require('../Repositories/pokemonsRepository');

var _pokemonsRepository2 = _interopRequireDefault(_pokemonsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokemonController = function () {
    function PokemonController() {
        _classCallCheck(this, PokemonController);
    }

    _createClass(PokemonController, [{
        key: 'getAll',
        value: async function getAll(req, res, next) {
            var pokemons = await _pokemonsRepository2.default.getAll();
            return res.status(200).json(pokemons);
        }
    }, {
        key: 'getByTd',
        value: async function getByTd(req, res, next) {
            var idPokemon = await _pokemonsRepository2.default.getById(req.params.id);
            return res.status(200).json(idPokemon);
        }
    }, {
        key: 'store',
        value: async function store(req, res, next) {

            var pokemon = req.body;

            var schema = _joi2.default.object({
                name: _joi2.default.string().alphanum().required(),
                type: _joi2.default.array().required(),
                species: _joi2.default.string().required(),
                height: _joi2.default.number().required(),
                weight: _joi2.default.number().required(),
                abilities: _joi2.default.array().required(),
                // image
                baseStats: {
                    hp: _joi2.default.number().required(),
                    attack: _joi2.default.number().required(),
                    defense: _joi2.default.number().required(),
                    specialAttack: _joi2.default.number().required(),
                    specialDefense: _joi2.default.number().required(),
                    speed: _joi2.default.number().required(),
                    total: _joi2.default.number().required()
                }
            });
            var regPokemon = schema.validate(pokemon);

            if (regPokemon.error) {
                return res.status(400).json({ error: regPokemon.error });
            }

            var savedPokemon = await _pokemonsRepository2.default.create(pokemon);

            return res.status(201).json(savedPokemon);
        }
    }, {
        key: 'edit',
        value: function edit(req, res, next) {
            return res.send();
        }
    }, {
        key: 'remove',
        value: async function remove(req, res, next) {
            var delPokemon = await _pokemonsRepository2.default.delete(req.params.id);
            return res.status(200).json({ delPokemon: delPokemon });
        }
    }]);

    return PokemonController;
}();

exports.default = new PokemonController();