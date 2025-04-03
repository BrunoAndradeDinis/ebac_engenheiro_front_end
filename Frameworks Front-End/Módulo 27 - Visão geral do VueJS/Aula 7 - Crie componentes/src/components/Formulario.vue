<script setup>
  const props = defineProps(['cadastrarTarefa', 'tarefaTemp', 'trocarFiltro', "editaTarefaTemp"])
</script>

<template>
  <form @submit.prevent="props.cadastrarTarefa">
    <div class="row">
      <div class="col">
        <input
          @change="props.editaTarefaTemp"
          type="text"
          placeholder="Digite aqui a descrição da tarefa"
          class="form-control"
          required
          :value="props.tarefaTemp"
        />
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary">Cadastrar</button>
      </div>
      <div class="col md-2">
        <select
          @change="props.trocarFiltro"
          class="form-control"
        >
          <option value="todas">Todas tarefas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>
    </div>
  </form>
</template>
