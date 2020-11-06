import mongoose from 'mongoose';
import Pokedex from '../config/db';


export default new class PokemonRepository {

    getAll() {
        return Pokemon.find();
    }

    getById(id) {
        return Pokemon.findById(id);
    }

    create(pokemon) {
        return Pokemon.create(pokemon);
    }

    update(id, pokemon) {

        const updatedpokemon = {
            name: pokemon.name,
            type: pokemon.type,
            species: pokemon.species,
            height: pokemon.height,
            abilities: pokemon.abilities,
            //image: ,

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

        return Pokemon.findByIdAndUpdate(id, updatedpokemon, { new: true });
    }

    delete(id) {
        return Person.findByIdAndRemove(id);
    }

}
