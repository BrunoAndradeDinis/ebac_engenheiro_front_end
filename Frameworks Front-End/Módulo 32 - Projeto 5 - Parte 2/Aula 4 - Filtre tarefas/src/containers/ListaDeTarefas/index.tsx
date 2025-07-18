import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <S.Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
        </p>
        <ul>
          {filtraTarefas().map((ta) => (
            <li key={ta.titulo}>
              <Tarefa
                descricao={ta.descricao}
                prioridade={ta.prioridade}
                status={ta.status}
                titulo={ta.titulo}
                id={ta.id}
              />
            </li>
          ))}
        </ul>
      </S.Container>
    </>
  )
}

export default ListaDeTarefas
