<script setup>
  const props = defineProps(['tarefasPendentes'])
</script>

<template>
  <header class="p-5 my-4 bg-light rounded-3">
    <h1>Minhas Tarefas</h1>
    <p>Você possui {{ props.tarefasPendentes }} tarefas pentendes</p>
  </header>
</template>
