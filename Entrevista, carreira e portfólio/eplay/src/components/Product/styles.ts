import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  // height: 100%;
  text-decoration: none;
  color: ${colors.white};
  display: block;

  img {
    display: block;
    width: 100%;
    min-width: 222px;
    max-width: 222px;
    height: 100%;
    min-height: 250px;
    max-height: 250px;
    border-radius: 8px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  position: relative;
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`
