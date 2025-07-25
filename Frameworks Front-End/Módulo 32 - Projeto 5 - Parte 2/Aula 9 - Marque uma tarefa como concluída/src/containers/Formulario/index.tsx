import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <>
      <MainContainer>
        <Titulo>Nova tarefa </Titulo>
        <S.Form onSubmit={cadastrarTarefa}>
          <Campo
            value={titulo}
            onChange={({ target }) => setTitulo(target.value)}
            type="text"
            placeholder="Título"
          />
          <Campo
            value={descricao}
            onChange={({ target }) => setDescricao(target.value)}
            as="textarea"
            placeholder="Descrição da tarefa"
          />
          <S.Opcoes>
            <p>Prioridade</p>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <S.Opcao key={prioridade}>
                <input
                  value={prioridade}
                  type="radio"
                  name="Prioridade"
                  onChange={({ target }) =>
                    setPrioridade(target.value as enums.Prioridade)
                  }
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </S.Opcao>
            ))}
          </S.Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </S.Form>
      </MainContainer>
    </>
  )
}

export default Formulario
