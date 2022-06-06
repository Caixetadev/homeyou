import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Footer = styled.footer`
  width: 100%;
  height: 32.1rem;
  display: flex;
  margin-top: 7.8rem;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
`

export const Table = styled.div`
  display: flex;
  margin-left: 6.9rem;
`

export const Column = styled.dl`
  & + dl {
    margin-left: 16.5rem;
  }
`

export const Title = styled.dt`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.fonts.smallX};
    color: ${theme.colors.text_dark};
    margin-bottom: 2.1rem;
  `}
`

export const Items = styled.dd`
  ${({ theme }) => css`
    & + dd {
      margin-top: 1.6rem;
    }
    font-size: ${theme.fonts.smallX};
    font-weight: 400;
    color: ${theme.colors.text_dark};
  `}
`
