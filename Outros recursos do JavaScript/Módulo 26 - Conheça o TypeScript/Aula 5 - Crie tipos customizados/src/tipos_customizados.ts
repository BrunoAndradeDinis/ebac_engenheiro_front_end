type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
};

const alunos: aluno[] = [
  {
    nome: "Bruno",
    cursos: ["Front-end", "UX/UI"],
    idade: 28,
  },
  {
    nome: "Hana",
    cursos: ["Design", "Artes"],
    idade: 25,
  },
];

alunos.push({
  nome: "Ana Julia",
  cursos: ["Arquitetura"],
  idade: 25,
});

const novoAluno: aluno = {
  nome: "Cabron",
  idade: 32,
};

function exibeAluno(aluno: aluno){
  console.log(aluno.nome)
}