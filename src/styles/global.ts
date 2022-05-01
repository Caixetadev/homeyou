import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family};
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
  }
`
