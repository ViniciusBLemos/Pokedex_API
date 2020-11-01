import express, { Router } from 'express';
var app = express();
import { urlencoded, json } from 'body-parser'; 

app.use(urlencoded({ extended: true}));
app.use(json());

var port = process.env.port || 3000

var router = Router();

app.listen(port);
console.log("iniciando na porta" +port);