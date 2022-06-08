import styled, { css } from 'styled-components'

import { AiOutlineHome } from 'react-icons/ai'

export const IconHome = styled(AiOutlineHome)`
  ${({ theme }) => css`
    font-size: 4rem;
    padding: 0.5rem;
    background-color: ${theme.colors.background_terciary};
    color: ${theme.colors.text};
    transition: all 0.3 ease;

    @media (max-width: 520px) {
      font-size: ${theme.fonts.medium}!important;
    }
  `}
`
