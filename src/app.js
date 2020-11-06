import express, { Router } from 'express';
const app = express();
const router = Router();
import { urlencoded, json } from "body-parser";

//Rotas
import index from './server';
import pokemonRoute from './Routes/pokemonRoute';

app.use(urlencoded({
    extended: true
}));

app.use(json());


app.use('/', index);
app.use('/pokemon', pokemonRoute);

export default app;
