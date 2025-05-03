import styled from "styled-components"
import { Props } from "."
import { Theme } from "../../themes/dark"

export const Titulo = styled.h3<Props>`
  color: ${({ theme }) => (theme as Theme).corPrincipal};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  font-weight: bold;
  margin-bottom: 16px;
`
