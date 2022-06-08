import styled, { css } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  @media (max-width: 560px) {
    height: 30rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1102px) {
    flex-direction: column;
  }
`

export const Welcome = styled.div`
  @media (max-width: 1102px) {
    margin-top: 5rem;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.large};
    color: ${theme.colors.text_dark};
    margin-bottom: 1.6rem;
    max-width: 50rem;
    font-weight: 600;

    @media (max-width: 560px) {
      margin-top: 4rem;
      font-size: ${theme.fonts.medium};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray};
    font-size: ${theme.fonts.smallX};
    max-width: 50rem;
    font-weight: 500;
    line-height: 2.88rem;

    @media (max-width: 560px) {
      font-size: 1.4rem;
      line-height: 1.96rem;
      max-width: 28rem;
      width: 100%;
      margin-top: 2.4rem;
    }
  `}
`

export const AboutUs = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.text_dark};
    background-color: transparent;
    height: 4.6rem;
    margin-left: 4rem;
    font-size: ${theme.fonts.smallX};
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 560px) {
      font-size: 1.2rem;
    }
  `}
`

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 66rem;
  max-height: 85rem;
  object-fit: cover;

  @media (max-width: 1254px) {
    width: 50rem;
    height: 100%;
  }

  @media (max-width: 1102px) {
    margin-top: 5rem;
  }

  @media (max-width: 560px) {
    display: none;
  }
`
