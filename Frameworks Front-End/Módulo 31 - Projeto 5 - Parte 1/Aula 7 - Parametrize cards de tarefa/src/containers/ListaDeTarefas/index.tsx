import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Ver as aulas do curso que você pagou'
  },
  {
    titulo: 'Ler documentação do React',
    prioridade: 'urgente',
    status: 'em andamento',
    descricao: 'Aprofundar nos hooks e no ciclo de vida dos componentes'
  },
  {
    titulo: 'Praticar algoritmos no LeetCode',
    prioridade: 'normal',
    status: 'pendente',
    descricao:
      'Resolver pelo menos 3 problemas de nível fácil e 1 de nível médio'
  },
  {
    titulo: 'Atualizar portfólio',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Adicionar os projetos mais recentes com boas descrições'
  },
  {
    titulo: 'Organizar arquivos da EBAC',
    prioridade: 'normal',
    status: 'concluido',
    descricao: 'Separar os materiais por módulos e tópicos no drive'
  },
  {
    titulo: 'Fazer deploy de projeto no Vercel',
    prioridade: 'urgente',
    status: 'em andamento',
    descricao: 'Publicar o projeto React finalizado com domínio personalizado'
  }
]

const ListaDeTarefas = () => {
  return (
    <>
      <S.Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        </p>
        <ul>
          {/* <li>
            <Tarefa />
          </li> */}
          {tarefas.map((ta) => (
            <li key={ta.titulo}>
              <Tarefa
                descricao={ta.descricao}
                prioridade={ta.prioridade}
                status={ta.status}
                titulo={ta.titulo}
              />
            </li>
          ))}
        </ul>
      </S.Container>
    </>
  )
}

export default ListaDeTarefas
