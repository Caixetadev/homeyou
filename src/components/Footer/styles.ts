import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  height: 32.1rem;
  display: flex;
  margin-top: 7.8rem;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 560px) {
    svg {
      display: none;
    }
  }
`

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 6.9rem;

  @media (max-width: 560px) {
    margin: 0;
  }

  @media (max-width: 559px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const Column = styled.dl`
  & + dl {
    margin-left: 16.5rem;
  }

  @media (max-width: 560px) {
    & + dl {
      margin-left: 0;
    }
    margin-bottom: 3.2rem;
  }
`

export const Title = styled.dt`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.fonts.smallX};
    color: ${theme.colors.text_dark};
    margin-bottom: 2.1rem;

    @media (max-width: 560px) {
      font-size: 1.4rem;
    }
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

    @media (max-width: 560px) {
      font-size: 1.2rem;
    }
  `}
`
