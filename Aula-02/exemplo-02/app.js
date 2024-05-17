// O node poussui duas formas diferentes de manipular arquivos/modulos.

// Sempre utiliza o EcmaScript Module.

// CommonJS
    // Importar: Utilizando o "require", exemplo -> const express = require('express');
    // Exportar: Utilizando o "module.exports", exemplo -> module.exports = express();

// EcmaScript Module / ES Module
    // Importar: Utilizando o "import", exemplo -> import express from 'express';
    // Exportar: Utilizando o "export", exemplo -> export default express();

import express from 'express';

import * as moduleMultiPont from './functions/multiplicar.js';
import dividir from './functions/dividir.js';
console.log(dividir(5, 5))
console.log(moduleMultiPont.multiplicar(5, 5))
console.log(moduleMultiPont.potencia(5, 5))

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.get("/data", (req, res) => {
    res.status(200).json({
        id: 1,
        name: "Maurício",
        age: 20
    });
})

// host: localhost | 127.0.0.1
// host + porta: localhost:3000
app.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});