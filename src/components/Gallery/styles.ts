import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 13.7rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray};
    line-height: 2.88rem;
    text-align: center;
    font-weight: 500;
    margin-top: 1.9rem;
    font-size: ${theme.fonts.smallX};
    max-width: 77.1rem;
  `}
`

export const WrapperImages = styled.div`
  margin-top: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
`

export const Image = styled.img`
  width: 39.6rem;
  height: 55rem;

  & + img {
    margin-left: 2rem;
  }
`
