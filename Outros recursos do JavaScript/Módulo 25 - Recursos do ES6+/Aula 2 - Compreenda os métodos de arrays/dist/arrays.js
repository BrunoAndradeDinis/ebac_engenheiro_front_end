"use strict";

var redesSociais = ["Facebook", "Instagram", "Twitter"];
for (var i = 0; i <= redesSociais.length; i++) {
  console.log("Eu tenho perfi na rede social: ".concat(redesSociais[i]));
}
// foreach
redesSociais.forEach(function (redesocial, i) {
  console.log("Eu tenho perfi na rede social: ".concat(i + 1, "\xBA ").concat(redesocial));
});
var alunos = ["Gustavo", "Julia", "Paula", "Wrangler"];
// map
var alunos2 = alunos.map(function (aluno) {
  aluno = {
    nome: aluno,
    curso: "Frontend"
  };
  return aluno;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numero) {
  return numero * 2;
});
console.log(dobroDosNumeros);
// find
var paula = alunos2.find(function (aluno) {
  return aluno.nome == "Paula";
});
console.log(paula);
// findIndex
var paulaIndice = alunos2.findIndex(function (aluno) {
  return aluno.nome == "Paula";
});
console.log(paulaIndice);

// const todosOsAlunosSaoDeFrontEnd = alunos2.every(aluno =>{
//   return aluno.curso === "Frontend" // true or false
// })

alunos2.push({
  nome: "Hantaro",
  curso: "Backend"
}); // após adicionar o aluno o return será diferente de true todosOsAlunosSaoDeFrontEnd

// every
var todosOsAlunosSaoDeFrontEnd = alunos2.every(function (aluno) {
  return aluno.curso === "Frontend"; // true or false
});
console.log(todosOsAlunosSaoDeFrontEnd);

// some
var existeAlgumAlunoDeBackend = alunos2.some(function (aluno) {
  return aluno.curso === "Backend" && aluno.curso === "Frontend";
});
console.log(existeAlgumAlunoDeBackend);

// filter
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === "Backend";
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

// reduce
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, numero) {
  acumulador += numero;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);