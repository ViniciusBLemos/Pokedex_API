import { connect, Schema as _Schema, model } from 'mongoose';
connect('mongodb://127.0.0.1/db_employees');

var Schema = _Schema;

var pokemonSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var Pokrmon = model('Pokrmon', pokemonSchema);
export default Pokemon;