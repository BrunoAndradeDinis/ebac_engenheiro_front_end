// Aula 7 - Aplique o polimorfismo
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

  this.setSalario = (valor) => {
    if (typeof valor === "number") _salario = valor;
  };
  // Getters and Setters
  this.getSalario = () => {
    return Number(_salario);
  };

  this.dizCargo = () => {
    console.log(this.cargo);
  };

  this.aumento = () => {
    const novoSalario = _salario * 1.1;
    _salario = novoSalario;
  };

  Pessoa.call(this, nome);
}

function Estagiario(nome) {
  Funcionario.call(this, nome, "Estagiario", 2000);

  this.aumento = () => {
    const novoSalario = this.getSalario() * 1.07;
    this.setSalario(Number(novoSalario));
  };
}

function Gerente(nome) {
  Funcionario.call(this, nome, "Gerente", 10000);

  this.aumento = () => {
    const novoSalario = this.getSalario() * 1.15;
    this.setSalario(Number(novoSalario));
  };
}

const funcionario1 = new Funcionario("Bruno", "Dev Front-end", 5000);
const funcionario2 = new Estagiario("Joe");
const funcionario3 = new Gerente("Paula");

console.log(funcionario1.getSalario());
funcionario1.aumento();
console.log(funcionario1.getSalario());
///
console.log(funcionario2.getSalario());
funcionario2.aumento();
console.log(funcionario2.getSalario());
///
console.log(funcionario3.getSalario());
funcionario3.aumento();
console.log(funcionario3.getSalario());
