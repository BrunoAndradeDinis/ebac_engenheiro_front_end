<script setup>
const props = defineProps(["tarefas", "inputChecked", "pendentes"]);
</script>

<template>
  <ul v-if="props.pendentes" class="list-group mt-4">
    <li class="list-group-item" v-for="tarefa in props.tarefas">
      <input
        @change="(evento) => (tarefa.finalizada = evento.target.checked)"
        :checked="tarefa.finalizada"
        :id="tarefa.titulo"
        type="checkbox"
      />

      <label
        :class="{ done: tarefa.finalizada }"
        class="ms-3"
        :for="tarefa.titulo"
        >{{ tarefa.titulo }}</label
      >
    </li>
  </ul>
  <h4 class="h6 m-2" v-else>Não existe tarefas pendentes, adicione uma nova tarefa!</h4>
</template>
<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
