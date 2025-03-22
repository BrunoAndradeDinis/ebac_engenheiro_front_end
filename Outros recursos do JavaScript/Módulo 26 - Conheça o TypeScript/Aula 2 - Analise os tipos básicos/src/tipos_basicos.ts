// Tipos padrão
let estaChovendo: boolean = true;

estaChovendo = false; // "false"

let idade: number = 27;

let altura: number = 1.75;

const nacionalidade: string = "brasileira";

// Arrays
const colegas: string[] = ["brinu", "jitsu", "oragne"];
const tecnologias: Array<string> = ["html", "css", "js"];
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// tecnologias.push()
// notas.push() // não roda, pois o array é apenas leitura

// Tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = [
  "Bruno",
  true,
  28,
];

// Union Type
let idadeDaAna: number | string = 25; //aceita 2 tipos de dado
idadeDaAna = "25 anos";

// Any - aceita tudo
let dadosDaApi:any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'
