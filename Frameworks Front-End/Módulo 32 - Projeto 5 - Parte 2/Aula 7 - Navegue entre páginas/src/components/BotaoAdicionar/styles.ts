import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: aliceblue;
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 40px;
  border-radius: 50%;
  padding-bottom: 0.5rem;
`
