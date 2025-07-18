import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard criterio="status" contador={3} legenda="pendentes" />
          <FiltroCard criterio="status" contador={4} legenda="concluídas" />
          <FiltroCard criterio="prioridade" contador={2} legenda="urgentes" />
          <FiltroCard
            criterio="prioridade"
            contador={2}
            legenda="importantes"
          />
          <FiltroCard criterio="prioridade" contador={3} legenda="normal" />
          <FiltroCard criterio="status" contador={7} legenda="todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
