import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    background-color: antiquewhite;

    body{
      padding-top: 80px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1074px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }
`
