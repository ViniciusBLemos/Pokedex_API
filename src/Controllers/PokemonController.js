import Joi from 'joi';
import pokemonsRepository from '../Repositories/pokemonsRepository';
import PokemonRepository from '../Repositories/pokemonsRepository';

class PokemonController {
    async getAll(req, res, next) {
        const pokemons = await PokemonRepository.getAll();
        return res.status(200).json(pokemons);
    }

    async getByTd(req, res, next) {
        const idPokemon = await pokemonsRepository.getById(req.params.id);
        return res.status(200).json(idPokemon);
    }

    async store(req, res, next) {

        const pokemon = req.body;

        const schema = Joi.object({
            name: Joi.string().alphanum().required(),
            type: Joi.array().required(),
            species: Joi.string().required(),
            height: Joi.number().required(),
            weight: Joi.number().required(),
            abilities: Joi.array().required(),
            // image
            baseStats : {
                hp: Joi.number().required(),
                attack: Joi.number().required(),
                defense: Joi.number().required(),
                specialAttack: Joi.number().required(),
                specialDefense: Joi.number().required(),
                speed: Joi.number().required(),
                total: Joi.number().required()
            }
        })
        const regPokemon = schema.validate(pokemon);

        if(regPokemon.error) {
            return res.status(400).json({ error: regPokemon.error })
        }

        const savedPokemon = await pokemonsRepository.create(pokemon);

        return res.status(201).json(savedPokemon);

    }

    edit(req, res, next) {
        return res.send();
    }

    async remove(req, res, next) {
        const delPokemon = await pokemonsRepository.delete(req.params.id);
        return res.status(200).json({ delPokemon });
    }
}

export default new PokemonController();
