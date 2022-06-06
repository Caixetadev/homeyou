import styled, { css } from 'styled-components'

import { AiOutlineHome } from 'react-icons/ai'

type Prop = {
  isScroll: boolean
}

export const Header = styled.header<Prop>`
  ${({ theme, isScroll }) => css`
    display: flex;
    align-items: center;

    position: sticky;
    top: 0;
    right: 0;

    z-index: 10;

    height: ${isScroll ? '6.8rem' : '8rem'};
    width: 100%;
    background-color: ${isScroll
      ? theme.colors.background_terciary
      : theme.colors.background};

    h1,
    a,
    ul li svg {
      color: ${isScroll ? theme.colors.text : theme.colors.text_dark}!important;
    }

    transition: all 0.3s ease-out;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h1 {
      text-transform: uppercase;
      color: ${theme.colors.text_dark};
      font-size: ${theme.fonts.medium};
      margin-left: 1.5rem;
      font-weight: 600;
    }
  `}
`

export const IconHome = styled(AiOutlineHome)`
  ${({ theme }) => css`
    font-size: 4rem;
    padding: 0.5rem;
    background-color: ${theme.colors.background_terciary};
    color: ${theme.colors.text};
    transition: all 0.3 ease;
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;

    a,
    svg {
      transition: all 0.3s ease;
      color: ${theme.colors.text_dark};
    }
  `}
`

export const Icons = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 4rem;
`

export const Icon = styled.li`
  & + li {
    margin-left: 2rem;
  }
`

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  & + li {
    margin-left: 4.8rem;
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text_dark};
    font-size: ${theme.fonts.smallX};
    font-weight: 500;

    svg {
      color: ${theme.colors.text_dark};
      font-size: 2rem;
    }
  `}
`
