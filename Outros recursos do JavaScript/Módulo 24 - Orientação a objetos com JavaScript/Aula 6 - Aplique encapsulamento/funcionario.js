// Aula 6
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
  // this.salario = salario;
  let _salario = salario;

  // Getters and Setters
  this.getSalario = () => {
    return   `O salário de ${this.nome} é R$${_salario.toFixed(2)}`;
  };

  this.setSalario = (valor) => {
    if (typeof valor === "number") _salario = valor;
  };

  this.dizCargo = () => {
    console.log(this.cargo);
  };

  Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Bruno");
const funcionario1 = new Funcionario("Bruno", "Dev Front-end", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1.getSalario());
funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.setSalario("8000");
console.log(funcionario1.getSalario());
funcionario1.setSalario(3250);
console.log(funcionario1.getSalario());