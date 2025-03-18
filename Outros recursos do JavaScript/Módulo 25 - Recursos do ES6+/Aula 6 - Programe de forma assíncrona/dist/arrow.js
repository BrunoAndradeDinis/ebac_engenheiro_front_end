"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz olá!";
};
console.log(minhaFuncao());
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "Ka",
    fabricante: "Ford"
  };
};
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  freiar: function freiar() {
    console.log(_this);
    _this.velocidadeAtual -= 30;
  }
};
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.freiar();
console.log(carro.velocidadeAtual);