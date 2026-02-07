import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const SectionContainer = styled.section<{
  backgroundColor: 'gray' | 'black'
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor === 'gray' ? colors.gray : colors.black};
  padding: 32px 0;
`
