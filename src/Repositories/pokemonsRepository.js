import mongoose from 'mongoose';
import Pokedex from '../config/db';
import Pokemon from '../models/Pokemon';


export default new class PokemonRepository {

    getAll() {
        return Pokemon.find();
    }

    getById(id) {
        return Pokedex.findById(id);
    }

    create(pokemon) {
        return Pokedex.create(Pokedex);
    }

    update(id, pokemon) {

        const updatedpokemon = {
            name: pokemon.name,
            type: pokemon.type,
            species: pokemon.species,
            height: pokemon.height,
            abilities: pokemon.abilities,
            // image: ,

            baseStats : {
                hp: pokemon.hp,
                attack: pokemon.attack,
                deffense: pokemon.deffense,
                specialAttack: pokemon.specialAttack,
                specialDefense: pokemon.specialDefense,
                speed: pokemon.speed,
                total: pokemon.total
            }
        }

        return Pokedex.findByIdAndUpdate(id, updatedpokemon, { new: true });
    }

    delete(id) {
        return Pokedex.findByIdAndRemove(id);
    }

}
