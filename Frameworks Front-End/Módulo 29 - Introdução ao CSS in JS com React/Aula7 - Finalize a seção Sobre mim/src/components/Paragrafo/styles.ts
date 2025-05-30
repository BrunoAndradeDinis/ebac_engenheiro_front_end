import styled from "styled-components"
import { Props } from "."

export const P = styled.p<Props>`
  color: ${({ tipo }) => (tipo === "principal" ? "#282a35" : "#949494")};
  font-size: "14px";
  line-height: 22px;
`
