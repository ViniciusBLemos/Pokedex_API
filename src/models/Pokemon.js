import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    species: {type: String, required: true},
    height: {type: Number, required: true},
    ablities: {type: String, required: true},
});

export default mongoose.model('Pokemon', PokemonSchema);
