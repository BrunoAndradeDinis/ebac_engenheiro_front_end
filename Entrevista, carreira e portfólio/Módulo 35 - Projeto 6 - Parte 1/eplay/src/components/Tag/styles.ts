import styled from 'styled-components'
import { colors } from '../../styles'
import { TagProps } from '.'

export const TagContainer = styled.div<TagProps>`
  display: inline-block;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '1rem' : '0.625rem')};
  font-weight: bold;
  padding: ${(props) =>
    props.size === 'big' ? '0.5rem 1rem' : '0.25rem 0.4.25rem'};
  border-radius: 0.5rem;
`
