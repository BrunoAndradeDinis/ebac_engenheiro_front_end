<script setup>
<<<<<<< HEAD
import { reactive } from "vue";

const nome = "Bruno de Andrade";
const meuObj = {
  nome: "Bruno",
  filmeFav: "The Warriors",
  dizOla(x) {
    return `${x} diz: Olá!`;
  },
};
const enderecoDaImagem =
  "https://sm.ign.com/ign_pt/screenshot/default/blob_2mkr.jpg";
const enderecoDaImagem2 =
  "https://i.scdn.co/image/ab67616d0000b273cfeae645958e9248abff0710";

const botaoEstaDesabilitado = true;

const gostaDoSquirtle = true;
const gostaDoPikachu = false;

const estaAutorizado = false;

// let contador = 0;
const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferencia: 0,
  nomes: ["Bruno", "Honey", "Bianca", "Frô", "Lilu"],
  nomeAInserir: "",
});

const alteraEmail = (evento) => (estado.email = evento.target.value);

// lista de nomes
// const nomes = ["Bruno", "Brinu", "Malone", "Honey", "Hana", "Bingu", "Bianca", "Frô", "Lilu", "Frida"]

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function saldoFuturo() {
  const { saldo, transferencia } = estado;

  return saldo - transferencia;
}

function validaValorTransferencia() {
  const { saldo, transferencia } = estado;

  return saldo >= transferencia;
}

function cadastrarNome(){
  estado.nomeAInserir.length >= 3 ? estado.nomes.push(estado.nomeAInserir) : alert("Digite mais caracteres")
}

</script>

<template>
  <h1>Olá Mundo!</h1>
  <h2>{{ nome }}.</h2>
  <h3>{{ meuObj.dizOla(meuObj.nome) }}</h3>
  <div>
    <img v-if="gostaDoSquirtle" :src="enderecoDaImagem" alt="" />
    <img v-else-if="gostaDoPikachu" :src="enderecoDaImagem2" alt="" />
    <h2 v-else>Não curte Pokemóns da primeira geração.</h2>
  </div>
  <div></div>

  <h3 v-if="estaAutorizado">Bem vindo!</h3>
  <h3 v-else>Não possui acesso!</h3>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>
  <hr />

  <div>
    {{ estado.contador }}

    <button type="button" @click="decrementar">-</button>
    <button type="button" @click="incrementar">+</button>
  </div>
  <hr />
  <div>
    {{ estado.email }}

    <div>
      <input type="email" @keyup="alteraEmail" />
    </div>
  </div>
  <hr />
  <div>
    Saldo: {{ estado.saldo }} <br />
    Transferência: {{ estado.transferencia }} <br />
    Saldo futuro: {{ saldoFuturo() }}
    <div>
      <input
        @keyup="(evento) => (estado.transferencia = evento.target.value)"
        type="number"
        placeholder="Qual o valor da transferência?"
        :class="{ invalido: !validaValorTransferencia() }"
      />
      <div>
        <button v-if="validaValorTransferencia()">Transferir</button>
        <span v-else>Valor maior que o saldo</span>
      </div>
    </div>
  </div>
  <hr />
  <div>
    <ul>
      <li v-for="nome in estado.nomes">{{ nome }}</li>
    </ul>
    <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome:" />
    <button type="button" @click="cadastrarNome()">Adicionar</button>
    <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
  </div>
</template>

<style scoped>
img {
  max-width: 300px;
  border-radius: 0.5rem;
  border: 2px solid aqua;
}
div {
  padding: 0.5rem;
}
input[type="number"] {
  border-radius: 4px;
}

.invalido {
  border-color: red;
  outline-color: red;
}

li {
  display: inline-block;
  padding: 1rem;
=======
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
>>>>>>> da10fec (Atualizações para as aulas)
}
</style>
