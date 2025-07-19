import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Estudar Typescript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.EMANDAMENTO,
      descricao: 'Ver as aulas do curso que você pagou!',
      id: 1
    },
    {
      titulo: 'Praticar algoritmos no LeetCode',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao:
        'Resolver pelo menos 3 problemas de nível fácil e 1 de nível médio',
      id: 2
    },
    {
      titulo: 'Ler documentação do React',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao: 'Aprofundar nos hooks e no ciclo de vida dos componentes',
      id: 3
    },
    {
      titulo: 'Criar um portfólio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao: 'Adicionar os projetos mais recentes com boas descrições',
      id: 4
    },
    {
      titulo: 'Organizar arquivos da EBAC',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao: 'Separar os materiais por módulos e tópicos no drive',
      id: 5
    },
    {
      titulo: 'Fazer deploy de projeto no Vercel',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao:
        'Publicar o projeto React finalizado com domínio personalizado',
      id: 6
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
