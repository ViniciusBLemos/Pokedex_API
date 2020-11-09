var express = require('express');
var router = express.Router();
import PokemonController  from '../Controllers/PokemonController';

router.get('/', PokemonController.getAll);
router.get('/:id', PokemonController.getByTd);
router.post('/', PokemonController.store);
router.put('/:id', PokemonController.edit);
router.delete('/:id', PokemonController.remove);

export default router;
