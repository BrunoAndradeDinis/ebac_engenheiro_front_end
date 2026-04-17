import styled from 'styled-components'

import { colors } from '../../styles'
// import { type ListProps } from './index'
import { Card } from '../Product/styles'
import { Props } from '.'

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.backgroundColor === 'gray' ? colors.gray : colors.black};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.backgroundColor === 'gray' ? colors.black : colors.gray};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
