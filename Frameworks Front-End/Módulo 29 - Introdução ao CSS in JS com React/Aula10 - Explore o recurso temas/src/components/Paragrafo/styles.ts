import styled from "styled-components"
import { Props } from "."
import { Theme } from "../../themes/dark"

export const P = styled.p<Props>`
  color: ${({ tipo, theme }) =>
    tipo === "principal"
      ? (theme as Theme).corPrincipal
      : (theme as Theme).corSecundaria};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  line-height: 22px;
`
