import styled from 'styled-components'
import { breakpoints, colors as cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const HeaderBar = styled.header`
  background-color: ${cores.gray};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 5rem;

  a {
    color: ${cores.white};
    font-weight: bold;
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 1rem 0;
      text-align: center;
    }
  }
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const MenuBurger = styled.div`
  flex-direction: column;
  gap: 5px;
  width: 32px;
  cursor: pointer;
  display: flex;
  transition: 0.5s ease-in-out;

  span {
    width: 25px;
    height: 2px;
    background-color: ${cores.white};
    border-radius: 2px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
