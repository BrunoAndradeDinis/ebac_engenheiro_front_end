class Pessoa {
  nome: string; // necessário antes do construtor e/ou/também com o valor iniciado/pré definido
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
  }

  dizOla(): string {
    return `${this.nome} disse oi`;
  }
}

// Protector
class ContaBancaria {
  protected saldo: number = 0; // exemplo de declaração de tipo
  public numeroConta: number; // torna público e acessivel, para a classe e para a instancia.

  constructor(numerodaconta: number) {
    this.numeroConta = numerodaconta;
  }

  static retornaNumeroDoBanco() { // não faz parte da instancia e sim da classe
    return 102;
  }

  private getSaldo() { // só tem como acessa-lo na classe não fica acessivel numa instancia.
    return this.saldo;
  }

   depositar(valor: number) { 
    this.saldo += valor;
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  depositar(valor: number): void {
    this.saldo += valor * 2;
  }
}

const contaDoJurandir = new ContaBancariaPessoaFisica(12345);
// console.log(contaDoJurandir.getSaldo());
contaDoJurandir.depositar(10);
contaDoJurandir.depositar(10);
contaDoJurandir.depositar(10);
// console.log(contaDoJurandir.getSaldo());
// contaDoJurandir.getSaldo();
console.log(ContaBancaria.retornaNumeroDoBanco())
