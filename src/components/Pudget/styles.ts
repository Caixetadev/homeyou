import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 12.5rem;

  @media (max-width: 560px) {
    margin-top: 8rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 2.4rem 0 3.2rem 0;
    font-weight: 500;
    color: ${theme.colors.text_gray};
    font-size: ${theme.fonts.smallX};

    @media (max-width: 560px) {
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.96rem;
    }
  `}
`
