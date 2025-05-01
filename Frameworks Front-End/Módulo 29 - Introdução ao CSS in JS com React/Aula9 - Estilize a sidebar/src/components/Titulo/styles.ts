import styled from "styled-components"
import { Props } from "."

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  font-weight: bold;
  margin-bottom: 16px;
`
