import { number } from 'joi';
import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: Array, required: true},
    species: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    abilities: {type: Array, required: true},
    // imagem
    baseStats: {
        hp: {type: Number, required: true},
        attack: {type: Number, required: true},
        defense: {type: Number, required: true},
        specialAttack: {type: Number, required: true},
        specialDefense: {type: Number, required: true},
        speed: {type: Number, required: true},
        total: {type: Number, required:true}
    }
});

export default mongoose.model('Pokemon', PokemonSchema);
