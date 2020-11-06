'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PokemonController = require('../Controllers/PokemonController');

var express = require('express');
var router = express.Router();


router.get('/', (0, _PokemonController.getAll)());
router.get('/:id', (0, _PokemonController.getById)());
router.post('/', (0, _PokemonController.store)());
router.put('/:id', (0, _PokemonController.edit)());
router.remove('/:id', (0, _PokemonController.remove)());

exports.default = router;