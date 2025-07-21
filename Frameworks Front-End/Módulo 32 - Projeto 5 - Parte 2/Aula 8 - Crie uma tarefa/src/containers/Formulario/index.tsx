import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import * as S from './styles'

const Formulario = () => {
  return (
    <>
      <MainContainer>
        <Titulo>Nova tarefa </Titulo>
        <S.Form>
          <Campo type="text" placeholder="Título" />
          <Campo as="textarea" placeholder="Descrição da tarefa" />
          <S.Opcoes>
            <p>Prioridade</p>
            <input type="radio" name="Prioridade" id="urgente" />{' '}
            <label htmlFor="urgente">Urgente</label>
            <input type="radio" name="Prioridade" id="importante" />{' '}
            <label htmlFor="importante">Importante</label>
            <input type="radio" name="Prioridade" id="normal" />{' '}
            <label htmlFor="normal">Normal</label>
          </S.Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </S.Form>
      </MainContainer>
    </>
  )
}

export default Formulario
