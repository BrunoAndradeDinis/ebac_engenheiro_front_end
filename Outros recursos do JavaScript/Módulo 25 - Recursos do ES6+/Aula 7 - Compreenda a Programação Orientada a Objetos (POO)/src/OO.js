// function Pokemon(nomeDoPokemon, tipoDoPokemon){
//   this.nome = nomeDoPokemon
//   this.tipo = tipoDoPokemon
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon{
  #hp = 100;

  constructor(nomeDoPokemon,tipoDoPokemon){
    this.nome = nomeDoPokemon
    this.tipo = tipoDoPokemon
  }

  atacar(nomeDoAtaque){
    console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
  }

  recebeuAtaque(){
    this.#hp -= 10
  }

  exibeHp(){
    console.log(this.#hp)
  }
}

class Pikachu extends Pokemon{
  constructor(){
    super("Pikachu", "elétrico")
  }

  atacar(){
    console.log(`${this.nome} atacou com choque do trovão!`)
  }
}

const pikachuDoAsh = new Pikachu("Pikachu", "elétrico");

const pikachu = new Pokemon("Pikachu", "elétrico");
pikachu.atacar("Choque do trovão!")
pikachuDoAsh.atacar("Ataque rápido!")
// pikachu.nome = "Pikachu"
// pikachu.tipo = "elétrico"

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)

pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.exibeHp()
pikachuDoAsh.atacar()