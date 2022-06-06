import { Container } from '../../styles/global'
import { Title } from '../Title'
import { images } from './images'
import * as S from './styles'

export function Gallery() {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <Title>Galeria</Title>
          <S.Description>
            Se você está entediado com a aparência da decoração de interiores da
            casa comuns, trabalhamos com designs diferentes e inovadores.
          </S.Description>
          <S.WrapperImages>
            {images.map(({ image }) => (
              <S.Image key={image} src={image} alt="oi" />
            ))}
          </S.WrapperImages>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
