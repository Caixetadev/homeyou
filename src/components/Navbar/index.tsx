import { useEffect, useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

import { Container } from '../../styles/global'
import * as S from './style'

export function Navbar() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <S.Header isScroll={scroll}>
      <Container>
        <S.Wrapper>
          <S.Logo>
            <S.IconHome />
            <h1>homeyou</h1>
          </S.Logo>
          <S.Nav>
            <S.List>
              <S.Item>
                <S.Link href="">Inicio</S.Link>
              </S.Item>
              <S.Item>
                <S.Link href="">Galeria</S.Link>
              </S.Item>
              <S.Item>
                <S.Link href="">Contato</S.Link>
              </S.Item>
            </S.List>

            <S.Icons>
              <S.Icon>
                <S.Link>
                  <HiOutlineUser />
                </S.Link>
              </S.Icon>
              <S.Icon>
                <S.Link>
                  <AiOutlineHeart />
                </S.Link>
              </S.Icon>
              <S.Icon>
                <S.Link>
                  <BiSearch />
                </S.Link>
              </S.Icon>
            </S.Icons>
          </S.Nav>
        </S.Wrapper>
      </Container>
    </S.Header>
  )
}
