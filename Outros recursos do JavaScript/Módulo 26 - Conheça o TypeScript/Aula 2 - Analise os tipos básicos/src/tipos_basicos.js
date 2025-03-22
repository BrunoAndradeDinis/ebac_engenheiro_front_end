"use strict";
// Tipos padrão
let estaChovendo = true;
estaChovendo = false; // "false"
let idade = 27;
let altura = 1.75;
const nacionalidade = "brasileira";
// Arrays
const colegas = ["brinu", "jitsu", "oragne"];
const tecnologias = ["html", "css", "js"];
const notas = [7, 9, 5, 8];
// tecnologias.push()
// notas.push() // não roda, pois o array é apenas leitura
// Tuplas
const lista = [
    "Bruno",
    true,
    28,
];
// Union Type
let idadeDaAna = 25; //aceita 2 tipos de dado
idadeDaAna = "25 anos";
// Any - aceita tudo
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
