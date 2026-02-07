import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid ${colors.white};
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid ${colors.white};
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`
