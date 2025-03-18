// refatorando aula anterior

const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i <= redesSociais.length; i++) {
  console.log(`Eu tenho perfi na rede social: ${redesSociais[i]}`);
}
// foreach
redesSociais.forEach((redesocial, i) => {
  console.log(`Eu tenho perfi na rede social: ${i + 1}º ${redesocial}`);
});

const alunos = ["Gustavo", "Julia", "Paula", "Wrangler"];
// map
const alunos2 = alunos.map((aluno) => {
  aluno = {
    nome: aluno,
    curso: "Frontend",
  };

  return aluno;
});

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];

const dobroDosNumeros = numeros.map((numero) => numero * 2);

console.log(dobroDosNumeros);
// find
const paula = alunos2.find((aluno) => aluno.nome == "Paula");

console.log(paula);
// findIndex
const paulaIndice = alunos2.findIndex((aluno) => aluno.nome == "Paula");

console.log(paulaIndice);

// const todosOsAlunosSaoDeFrontEnd = alunos2.every(aluno =>{
//   return aluno.curso === "Frontend" // true or false
// })

alunos2.push({
  nome: "Hantaro",
  curso: "Backend",
}); // após adicionar o aluno o return será diferente de true todosOsAlunosSaoDeFrontEnd

// every
const todosOsAlunosSaoDeFrontEnd = alunos2.every(
  (aluno) => aluno.curso === "Frontend" /* true or false*/
);

console.log(todosOsAlunosSaoDeFrontEnd);

// some
const existeAlgumAlunoDeBackend = alunos2.some(
  (aluno) => aluno.curso === "Backend" && aluno.curso === "Frontend"
);

console.log(existeAlgumAlunoDeBackend);

// filter
const filtraAlunosDeBackend = (aluno) => aluno.curso === "Backend";

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);

// reduce
const nums = [10, 20, 30, 10];

const soma = nums.reduce((acumulador, numero) => {
  acumulador += numero;
  return acumulador;
}, 0);

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce((acumulador, aluno) => {
  acumulador += `${aluno.nome} - ${aluno.curso}, `;

  return acumulador;
}, "");

console.log(nomesDosAlunos);
