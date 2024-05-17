// O node poussui duas formas diferentes de manipular arquivos/modulos.

// Sempre utiliza o EcmaScript Module.

// CommonJS
    // Importar: Utilizando o "require", exemplo -> const express = require('express');
    // Exportar: Utilizando o "module.exports", exemplo -> module.exports = express();

// EcmaScript Module / ES Module
    // Importar: Utilizando o "import", exemplo -> import express from 'express';
    // Exportar: Utilizando o "export", exemplo -> export default express();

const express = require('express');

const moduleMultiplicate = require('./functions/multiplicar.js');
console.log(moduleMultiplicate.multiplicar(5, 5))

const moduleDividir = require('./functions/dividir.js');
console.log(moduleDividir(5, 5))

const moduleSomar = require('./functions/somar.js');
console.log(moduleSomar(5, 5))

const moduleSubtrair = require('./functions/subtrair.js');
console.log(moduleSubtrair.subtrair(5, 5))

const app = express();

// host: localhost | 127.0.0.1
// host + porta: localhost:3000
app.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});