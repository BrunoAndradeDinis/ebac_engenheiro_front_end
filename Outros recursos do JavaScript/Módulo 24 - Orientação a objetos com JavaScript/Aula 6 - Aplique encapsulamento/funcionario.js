// Aula 5
function Pessoa(nome) {
  this.nome = nome;
  this.dizOi = () => {
    console.log(
      this.nome +
        `: Olá! Meu nome é ${this.nome} e aqui nesta empresa eu sou o `
    );
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  this.salario = salario;

  this.dizCargo = () => {
    console.log(this.cargo);
  };

  Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Bruno");
const funcionario1 = new Funcionario("Bruno", "Dev Front-end", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1);
funcionario1.dizOi();
funcionario1.dizCargo();
