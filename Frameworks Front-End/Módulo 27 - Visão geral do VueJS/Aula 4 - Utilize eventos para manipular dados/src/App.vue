<script setup>
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
});

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

const alteraEmail = (evento) => (estado.email = evento.target.value)
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
      <input
        type="email"
        @keyup="alteraEmail"
      />
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 300px;
  border-radius: 0.5rem;
}
div {
  padding: 0.5rem;
}
</style>
