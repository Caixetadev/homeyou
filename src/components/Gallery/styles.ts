import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 13.7rem;

  @media (max-width: 560px) {
    margin-top: 8.2rem;
  }
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

    @media (max-width: 560px) {
      font-size: 1.4rem;
      line-height: 1.96rem;
      margin-top: 1.6rem;
    }
  `}
`

export const WrapperImages = styled.div`
  margin-top: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 39.6rem;
  height: 55rem;

  & + img {
    margin-left: 2rem;
  }

  @media (max-width: 1305px) {
    width: 30rem;
  }

  @media (max-width: 1014px) {
    &:last-child {
      margin-top: 2rem;
    }
  }

  @media (max-width: 695px) {
    & + img {
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 560px) {
    width: 31.2rem;
    height: 35rem;
    & + img {
      margin-left: 0;
      margin-top: 2.4rem;
    }
  }
`
