const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 7.2 },
  { nome: "Carlos", nota: 6.8 },
  { nome: "Daniela", nota: 9.1 },
  { nome: "Eduardo", nota: 5.4 },
  { nome: "Fernanda", nota: 7.9 },
  { nome: "Gabriel", nota: 8.3 },
  { nome: "Helena", nota: 6.5 },
  { nome: "Igor", nota: 7.0 },
  { nome: "Juliana", nota: 9.5 },
  { nome: "Kleber", nota: 4.8 },
  { nome: "Larissa", nota: 7.7 },
  { nome: "Marcos", nota: 8.0 },
  { nome: "Natália", nota: 6.2 },
  { nome: "Otávio", nota: 5.9 },
  { nome: "Priscila", nota: 9.0 },
  { nome: "Rafael", nota: 6.0 },
  { nome: "Simone", nota: 8.1 },
  { nome: "Thiago", nota: 7.3 },
  { nome: "Vanessa", nota: 9.8 },
];
console.log(alunos);

function alunosValidacao(alunosParaValidar) {
  const alunosValidados = alunosParaValidar.map((aluno) => {
    return aluno.nota >= 6
      ? { ...aluno, status: "Aprovado" }
      : { ...aluno, status: "Reprovado" };
  });

  return alunosValidados;
}

const alunosAprovados = alunosValidacao(alunos).filter(aluno => aluno.status !== "Reprovado")

alunosAprovados.forEach(aluno => {
  console.log(`${aluno.nome} fechou com a nota ${aluno.nota} e está ${aluno.status}!`)
});