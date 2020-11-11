import { string } from 'joi';
import mongoose, { Schema } from 'mongoose';
import Pokedex from '../config/db';
import Pokemon from '../models/Pokemon';


 class PokemonRepository {

    getAll() {
        return Pokemon.find();
    }

    async getById(id) {
        return Pokemon.findById(id);
    }

    async create(pokemon) {
        return Pokemon.create(pokemon);
    }

    update(id, pokemon) {

        const updatedpokemon = {
            name: pokemon.name,
            type: pokemon.type,
            species: pokemon.species,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            // image: ,

            baseStats : {
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                specialAttack: pokemon.specialAttack,
                specialDefense: pokemon.specialDefense,
                speed: pokemon.speed,
                total: pokemon.total
            }
        }

        return Pokedex.findByIdAndUpdate(id, updatedpokemon, { new: true });
    }

    async delete(id) {
        return Pokemon.findByIdAndRemove(id);
    }

}

export default new PokemonRepository();
