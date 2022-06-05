import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-size: 1.6rem;
      font-family: ${theme.fonts.family};
      background-color: ${theme.colors.background};
      color: #fff;
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
  `}
`

export const Container = styled.div`
  max-width: 130rem;
  padding: 0 3rem;
  width: 100%;
  margin: 0 auto;
`
