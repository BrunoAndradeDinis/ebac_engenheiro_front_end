import styled from 'styled-components'

// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 0.5rem;
  cursor: pointer;
`
export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
