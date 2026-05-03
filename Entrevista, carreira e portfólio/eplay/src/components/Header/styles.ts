import styled from 'styled-components'
import { breakpoints, colors as cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.gray};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.white};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;
`

export const LinkItem = styled.li`
  margin-right: 1rem;
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
  }
`
