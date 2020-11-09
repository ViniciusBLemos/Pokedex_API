import PokemonRepository from '../Repositories/pokemonsRepository';

class PokemonController {
    async getAll(req, res, next) {
        const pokemons = await PokemonRepository.getAll();
        return res.status(200).json(pokemons);
    }

    getByTd(req, res, next) {
        return res.send();
    }

    store(req, res, next) {
        return res.send();
    }

    edit(req, res, next) {
        return res.send();
    }

    remove(req, res, next) {
        return res.json();
    }
}

export default new PokemonController();
