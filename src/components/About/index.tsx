import Couch from '/public/images/couch.png'

import { Container } from '../../styles/global'
import * as S from './styles'

export function About() {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.WrapperImage>
            <S.Image src={Couch.src} />
          </S.WrapperImage>
          <S.WrapperBox>
            <S.Box>
              <S.Title>Design Minimalista</S.Title>
              <S.Description>
                Móveis apenas essenciais e com design moderno, além de
                revestimentos bonitos e em cores neutras para manter a casa
                sempre com um estilo clean e suave.
              </S.Description>
            </S.Box>
            <S.Button>Quero saber mais sobre os designs</S.Button>
          </S.WrapperBox>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
