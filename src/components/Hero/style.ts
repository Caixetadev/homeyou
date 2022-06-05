import styled, { css } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Welcome = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.large};
    color: ${theme.colors.text_dark};
    margin-bottom: 1.6rem;
    max-width: 50rem;
    font-weight: 600;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray};
    font-size: ${theme.fonts.smallX};
    max-width: 50rem;
    font-weight: 500;
    line-height: 2.88rem;
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
`
