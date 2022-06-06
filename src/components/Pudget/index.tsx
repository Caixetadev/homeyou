import { Container } from '../../styles/global'
import { Button } from '../Button'
import { Title } from '../Title'
import * as S from './styles'

export function Pudget() {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <Title>Orçamento</Title>
          <S.Description>
            Interessado em ter o melhor projeto de arquitetura, design ou de
            móveis?
          </S.Description>
          <Button>Entre em contato</Button>
        </S.Wrapper>
      </Container>
    </S.Section>
  )
}
