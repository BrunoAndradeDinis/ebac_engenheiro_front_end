import { useDispatch } from 'react-redux'
import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: string
}

const FiltroCard = ({ ativo, contador, legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const filtrar = () => {
    dispatch(alteraFiltro({ criterio, valor: legenda }))
  }

  const filtrar = 

  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
