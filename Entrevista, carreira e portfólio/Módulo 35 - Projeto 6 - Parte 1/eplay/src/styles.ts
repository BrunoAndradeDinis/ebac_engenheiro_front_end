import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
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
    list-style: none;
    text-decoration: none;
  }

  body{
    background: ${colors.black};
    color: ${colors.white};
    padding-top: 2.5rem;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
`
