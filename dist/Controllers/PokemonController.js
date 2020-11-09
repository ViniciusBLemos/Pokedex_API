'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        value: function getByTd(req, res, next) {
            return res.send();
        }
    }, {
        key: 'store',
        value: function store(req, res, next) {
            return res.send();
        }
    }, {
        key: 'edit',
        value: function edit(req, res, next) {
            return res.send();
        }
    }, {
        key: 'remove',
        value: function remove(req, res, next) {
            return res.json();
        }
    }]);

    return PokemonController;
}();

exports.default = new PokemonController();