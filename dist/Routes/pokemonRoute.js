'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PokemonController = require('../Controllers/PokemonController');

var _PokemonController2 = _interopRequireDefault(_PokemonController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();


router.get('/', _PokemonController2.default.getAll);
router.get('/:id', _PokemonController2.default.getByTd);
router.post('/', _PokemonController2.default.store);
router.put('/:id', _PokemonController2.default.edit);
router.delete('/:id', _PokemonController2.default.remove);

exports.default = router;