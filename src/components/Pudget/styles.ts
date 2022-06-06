import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 12.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 1.6rem 0 3.2rem 0;
    font-weight: 500;
    color: ${theme.colors.text_gray};
    font-size: ${theme.fonts.smallX};
  `}
`
