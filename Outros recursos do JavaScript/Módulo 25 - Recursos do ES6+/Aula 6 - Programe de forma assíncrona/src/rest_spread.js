// rest operator

function somar() {
  let soma = 0;

  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}

console.log(somar(10, 20, 3, 4));

function somarComRest(...numeros) {
  const soma = numeros.reduce((total, numero) => {
    total += numero;
    return total;
  }, 0);

  return soma;
}

console.log(somarComRest(1, 2, 3, 4, 5, 6, 7, 8, 9));

// spread operator
const numeros = [1, 2, 3, 4];

console.log(...numeros.join(","));
console.log(numeros);

const timesDeFutebolSP = ["santos", "corinthians", "são paulo", "palmeiras"];
const timesDeFutebolRJ = ["vasco", "flamengo", "fluminense", "botafogo"];

const timesDeFutebolBR = [...timesDeFutebolRJ, ...timesDeFutebolSP];

console.log(timesDeFutebolSP.concat(timesDeFutebolSP));

console.log(timesDeFutebolBR);

const carroDaJulia = {
  modelo: "gol",
  marca: "vw",
  motor: 1.6,
};

const carroDaAna = {
  ...carroDaJulia,
  motor: 1.8,
};

console.log(carroDaJulia);
console.log(carroDaAna);

// desestruturação
// const motoDoCarroDaAna = carroDaAna.motor;

const { motor: motoDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motoDoCarroDaAna)
console.log(motorDoCarroDaJulia)

const [item1, item2, item3, ...outrostimes] = timesDeFutebolBR
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrostimes)

