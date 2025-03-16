const minhaFuncao = () => "Diz olá!";

console.log(minhaFuncao());

const retornaUmCarro = () => ({
  modelo: "Ka",
  fabricante: "Ford",
});

console.log(retornaUmCarro());

const carro = {
  velocidadeAtual: 40,
  acelerar: function(){
    console.log(this)
    this.velocidadeAtual += 10
  },
  freiar: ()=> {
    console.log(this)
    this.velocidadeAtual -=30
  }
}

carro.acelerar()
console.log(carro.velocidadeAtual)
carro.freiar()
console.log(carro.velocidadeAtual)