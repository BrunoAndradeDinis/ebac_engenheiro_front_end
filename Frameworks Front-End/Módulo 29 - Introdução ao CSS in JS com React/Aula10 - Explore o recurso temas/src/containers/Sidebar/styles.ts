import styled from "styled-components"
import { P } from "../../components/Paragrafo/styles"
import { Theme } from "../../themes/dark"

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  color: ${({ theme }) => (theme as Theme).corDeFundo};
  font-size: 10px;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => (theme as Theme).corPrincipal};
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      (theme as Theme).corDeFundoBotaoHoverPreto};
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  height: 500px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
