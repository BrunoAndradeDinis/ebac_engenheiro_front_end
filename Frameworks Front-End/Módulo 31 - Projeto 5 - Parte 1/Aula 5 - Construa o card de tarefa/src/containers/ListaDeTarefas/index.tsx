import Tarefa from '../../components/Tarefas'
import * as S from './styles'

const ListaDeTarefas = () => {
  return (
    <>
      <S.Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        </p>
        <ul>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
        </ul>
      </S.Container>
    </>
  )
}

export default ListaDeTarefas
