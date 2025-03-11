const carrodoJoao = {
  modelo: "Fiesta",
  fabricante: "Ford",
  anoModelo: 2020,
  anoFabricacao: 2019,
  acelerar: () => {
    console.log("Vruum!");
  },
};

const carrodaMaria = {
  modelo: "Ka",
  fabricante: "Ford",
  anoModelo: 2021,
  anoFabricacao: 2020,
  acelerar: () => {
    console.log("Vruum!");
  },
};

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;
  this.acelerar = () => {
    console.log("Acelerar!! VRUUUUUUUUUUUUuuuuuuuuuuuuuuuuum!");
  };
}

const carroDoJoao2 = new Carro("Civic", "Honda", 2020, 2019);
const carroDaMaria2 = new Carro("Silvia", "Nissan", 1992, 1991);
console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "Bruno";
const idade = 28;
const ehMaiorDeIdade = true;
const conhecimento = ["html", "css", "javascript"];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimentos: conhecimento,
};

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimento);
console.log(typeof pessoa);
console.log(typeof carroDaMaria2);
console.log(carroDaMaria2 instanceof Carro);

// aula 4
function exibeAtributo(nomeAtributo) {
  console.log(pessoa[nomeAtributo]);
}

exibeAtributo("nome");
exibeAtributo("idade");
exibeAtributo("conhecimentos");

pessoa.sobrenome = "Dinis";

Object.freeze(pessoa); //|| Assim ele congela impedindo de realizar manipulações no objeto/classe

pessoa.nome = "Piruleibe";
pessoa["sobrenome"] = "de Andrade " + pessoa.sobrenome;

exibeAtributo("sobrenome");

if (pessoa["sobrenome"]) {
  console.log(
    `A pessoa tem um nome e sobrenome: ${pessoa["nome"]} ${pessoa.sobrenome}`
  );
}

pessoa.sobrenome = undefined;

if ("sobrenome" in pessoa) {
  console.log(
    "Existe o atributo porém não tem valor atribuído. Ex: " + pessoa.sobrenome
  );
}

console.log(Object.keys(pessoa)); // acessando as chaves do objeto
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa)); // acessando os valores das chaves
console.log(Object.values(pessoa).length);



