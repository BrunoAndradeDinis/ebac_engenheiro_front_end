let meuMap = new Map();
meuMap.set("nome", "Bruno")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("nome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()){
  console.log(chave)
}

for (let chave of meuMap.values()){
  console.log(chave)
}

for (let chave of meuMap.entries()){
  console.log(chave)
}

for (let [chave, valor] of meuMap.entries()){
  console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add("73305885041")
cpfs.add("35427337091")
cpfs.add("25941965095")

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach(cpf =>{
  console.log(cpf)
})

const arrayTeste = ["BRuno de", "Hola patron", "Joao fulano", "Bruno", "Bruno", "BRuno de", "Ana", "julia", "Ana"]
console.log(arrayTeste)
const arrayComoSet = new Set([...arrayTeste])

console.log(arrayComoSet)

const arraySemItensDUplicados = [...arrayComoSet]

console.log(arraySemItensDUplicados)