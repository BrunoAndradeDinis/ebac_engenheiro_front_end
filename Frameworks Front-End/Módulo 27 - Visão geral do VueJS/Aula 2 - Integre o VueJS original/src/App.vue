<script setup>
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

</script>

<template>
  <h1>Olá Mundo!</h1>
  <h2>{{ nome }}.</h2>
  <h3>{{ meuObj.dizOla(meuObj.nome) }}</h3>
  <div>
    <img v-bind:src="enderecoDaImagem" alt="" width="300px" />
  </div>
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
}
</style>
