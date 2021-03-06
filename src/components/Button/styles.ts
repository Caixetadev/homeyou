import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    font-size: ${theme.fonts.smallX};
    background-color: ${theme.colors.background_terciary};
    font-family: ${theme.fonts.family};
    width: 22.5rem;
    height: 4.6rem;
    font-weight: 500;
    cursor: pointer;
    color: #fff;

    @media (max-width: 560px) {
      width: 14.7rem;
      height: 3.1rem;
      font-size: 1.2rem;
    }
  `}
`
