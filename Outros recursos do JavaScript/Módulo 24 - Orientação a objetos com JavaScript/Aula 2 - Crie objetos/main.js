const carrodoJoao = {
  modelo: "Fiesta",
  fabricante: "Ford",
  anoModelo: 2020,
  anoFabricacao: 2019,
  acelerar: ()=>{
    console.log("Vruum!")
  }
}

const carrodaMaria= {
  modelo: "Ka",
  fabricante: "Ford",
  anoModelo: 2021,
  anoFabricacao: 2020,
  acelerar: ()=>{
    console.log("Vruum!")
  }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;
  this.acelerar = ()=>{
    console.log("Acelerar!! VRUUUUUUUUUUUUuuuuuuuuuuuuuuuuum!")
  }

}

const carroDoJoao2 = new Carro("Civic", "Honda", 2020, 2019)
const carroDaMaria2 = new Carro("Silvia", "Nissan", 1992, 1991)
console.log(carroDoJoao2)
console.log(carroDaMaria2)

