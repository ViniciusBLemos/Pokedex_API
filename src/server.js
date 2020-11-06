import app from './app'

var port = process.env.port || 3000

app.listen(port);
console.log("iniciando na porta" +port);
