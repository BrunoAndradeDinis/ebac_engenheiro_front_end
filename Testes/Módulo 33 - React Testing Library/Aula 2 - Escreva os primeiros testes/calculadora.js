function soma(a, b){

    return a + b
}

function subtracao(a, b){

    return a - b
}

function multiplicacao(a, b){

    return a * b
}

function divisao(a, b){

    return a / b
}

console.log(`Soma: ${soma(1,2)}`)
console.log(`Subtração: ${subtracao(1,2)}`)
console.log(`Multiplicação: ${multiplicacao(1,2)}`)
console.log(`Divisão: ${divisao(1,2)}`)

module.exports = {
    soma,divisao, multiplicacao, subtracao
}