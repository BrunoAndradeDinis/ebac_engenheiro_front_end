import styled from 'styled-components'
import { colors } from '../../styles'
import { type ListProps } from './index'
import { Card } from '../Product/styles'

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
export const SectionContainer = styled.section<
  Omit<ListProps, 'title' | 'games'>
>`
  background-color: ${(props) =>
    props.backgroundColor === 'gray' ? colors.gray : colors.black};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.backgroundColor === 'gray' ? colors.black : colors.gray};
  }
`
