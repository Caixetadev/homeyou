import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: 8rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    margin-bottom: 2rem;
    font-size: ${theme.fonts.large_terceary};

    @media (max-width: 560px) {
      font-size: ${theme.fonts.medium};
    }
  `}
`

export const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family};
    font-weight: 500;
    text-decoration: underline;
    font-size: ${theme.fonts.smallX};
    color: ${theme.colors.text_dark};
    margin-top: 2.4rem;
    border: none;
    display: flex;
    background-color: transparent;

    @media (max-width: 560px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      margin-top: 1.6rem;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.fonts.small};
    line-height: 2.56rem;

    @media (max-width: 560px) {
      font-size: 1.4rem;
      line-height: 1.96rem;
    }
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    width: 58.5rem;
    height: 18.2rem;
    background-color: ${theme.colors.background_terciary};
    padding: 3rem;

    @media (max-width: 560px) {
      width: 31.2rem;
      height: 17.7rem;
      padding: 1.6rem;
    }
  `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 48.7rem;
    height: 45.7rem;

    &::after {
      content: '';
      position: absolute;
      right: 50px;
      bottom: 50px;
      width: 48.7rem;
      height: 45.7rem;
      z-index: -1;
      background-color: ${theme.colors.background_terciary};
    }

    @media (max-width: 560px) {
      display: none;
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    z-index: 1;
  `}
`
