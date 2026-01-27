import { createGlobalStyle } from 'styled-components'

const colors = {
  white: '#eeeeee',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:  'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body{
    background: ${colors.black};
    color: ${colors.white};
  }
`
