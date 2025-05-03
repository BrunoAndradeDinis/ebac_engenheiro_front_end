import styled from "styled-components"
import { Theme } from "../../themes/dark"

export const Card = styled.div`
  border: 1px solid ${({ theme }) => (theme as Theme).corDaBorda};
  padding: 1rem;
  border-radius: 0.5rem;
`
export const LinkBotao = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => (theme as Theme).corDeFundoBotao};
  color: ${({ theme }) => (theme as Theme).corTextoBotao};
  font-size: 14px;
  padding: 0.5rem;
  margin-top: 24px;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      (theme as Theme).corDeFundoBotaoHoverAzul};
  }
`
