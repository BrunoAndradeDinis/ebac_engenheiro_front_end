import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Typescript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.EMANDAMENTO,
      'Ver as aulas do curso que você pagou!',
      1
    ),
    new Tarefa(
      'Praticar algoritmos no LeetCode',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Resolver pelo menos 3 problemas de nível fácil e 1 de nível médio',
      2
    ),
    new Tarefa(
      'Ler documentação do React',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDO,
      'Aprofundar nos hooks e no ciclo de vida dos componentes',
      3
    ),
    new Tarefa(
      'Criar um portfólio',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDO,
      'Adicionar os projetos mais recentes com boas descrições',
      4
    ),
    new Tarefa(
      'Organizar arquivos da EBAC',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDO,
      'Separar os materiais por módulos e tópicos no drive',
      5
    ),
    new Tarefa(
      'Fazer deploy de projeto no Vercel',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDO,
      'Publicar o projeto React finalizado com domínio personalizado',
      6
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
