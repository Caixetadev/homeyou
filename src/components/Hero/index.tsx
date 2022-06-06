import HouseImage from '/public/images/home.png'

import { Container } from '../../styles/global'
import * as S from './style'
import { Button } from '../Button'

export function Hero() {
  return (
    <S.Main>
      <Container>
        <S.Wrapper>
          <S.Welcome>
            <S.Title>
              Ajudar você a encontrar o melhor conforto,
              <br /> é nossa prioridade.
            </S.Title>
            <S.Description>
              Encontre uma variedade de propriedades que combinam com você.
              Esqueça todas as dificuldades em encontrar uma residência
            </S.Description>
            <S.WrapperButtons>
              <Button>Entre em contato</Button>
              <S.AboutUs>Mais sobre nós</S.AboutUs>
            </S.WrapperButtons>
          </S.Welcome>

          <S.Image src={HouseImage.src} alt="Imagem de uma casa moderna" />
        </S.Wrapper>
      </Container>
    </S.Main>
  )
}
