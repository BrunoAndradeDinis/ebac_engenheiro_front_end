import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 35rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  object-fit: cover;

  .container {
    position: relative;
    z-index: 1;
    padding-top: 21.25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
`
export const Titulo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  max-width: 450px;
`

export const Preco = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  font-weight: bold;

  span {
    text-decoration: line-through;
  }
`
