"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
// Protector
class ContaBancaria {
    constructor(numerodaconta) {
        this.saldo = 0; // exemplo de declaração de tipo
        this.numeroConta = numerodaconta;
    }
    static retornaNumeroDoBanco() {
        return 102;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
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
console.log(ContaBancaria.retornaNumeroDoBanco());
