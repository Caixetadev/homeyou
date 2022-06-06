import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text_dark};
    font-weight: 600;
    font-size: ${theme.fonts.large_secundary};
  `}
`
