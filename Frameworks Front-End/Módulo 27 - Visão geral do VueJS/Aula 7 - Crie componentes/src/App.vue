<script setup>
import { reactive } from "vue";
import Cabecalho from "./components/Cabecalho.vue";
import Formulario from "./components/Formulario.vue";
import Listadetarefas from "./components/Listadetarefas.vue";

const estado = reactive({
  filtro: "todas",
  tarefaTemp: "",
  tarefas: [
    {
      titulo: "Estudar ES6",
      finalizada: false,
    },
    {
      titulo: "Estudar SASS",
      finalizada: false,
    },
    {
      titulo: "Ir para a academia",
      finalizada: true,
    },
  ],
});

const getTarefasPendentes = () => {
  return estado.tarefas.filter((tarefa) => !tarefa.finalizada);
};

const getTarefasFinalizadas = () => {
  return estado.tarefas.filter((tarefa) => tarefa.finalizada);
};

const getTarefasFiltradas = () => {
  const { filtro } = estado;

  switch (filtro) {
    case "pendentes":
      return getTarefasPendentes();
    case "finalizadas":
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
  }
};

const cadastrarTarefa = () => {
  // e.preventDefault();
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizada: false,
  };

  estado.tarefas.push(tarefaNova);
  estado.tarefaTemp = "";
};
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length" />
    <Formulario
      :tarefa-temp="estado.tarefaTemp"
      :cadastrar-tarefa="cadastrarTarefa"
      :edita-tarefa-temp="(evento) => (estado.tarefaTemp = evento.target.value)"
      :trocar-filtro="(evento) => (estado.filtro = evento.target.value)"
    />
    <Listadetarefas
      :tarefas="getTarefasFiltradas()"
      :pendentes="(getTarefasPendentes().length > 0)"
    />
  </div>
</template>
