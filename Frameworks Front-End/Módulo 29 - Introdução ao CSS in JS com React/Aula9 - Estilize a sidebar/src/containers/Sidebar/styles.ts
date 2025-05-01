import styled from "styled-components"
import { P } from "../../components/Paragrafo/styles"

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  color: #eee;
  font-size: 10px;
  border-radius: 0.75rem;
  background-color: #282a35;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(40, 42, 53, 0.63);
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  height: 500px;
`
