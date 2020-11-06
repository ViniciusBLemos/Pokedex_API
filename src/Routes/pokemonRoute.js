var express = require('express');
var router = express.Router();
import { getAll, getById, store, edit, remove } from '../Controllers/PokemonController';

router.get('/', getAll());
router.get('/:id', getById());
router.post('/', store());
router.put('/:id', edit());
router.remove('/:id', remove());

export default router;
