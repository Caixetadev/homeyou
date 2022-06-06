import { Container } from '../../styles/global'
import { Logo } from '../Logo'
import * as S from './styles'

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <Logo />
          <S.Table>
            <S.Column>
              <S.Title>Produtos</S.Title>
              <S.Items>Mobilia</S.Items>
              <S.Items>Segurança</S.Items>
              <S.Items>Design Interior</S.Items>
            </S.Column>
            <S.Column>
              <S.Title>Mais Informações</S.Title>
              <S.Items>Contrato</S.Items>
              <S.Items>Sobre nós</S.Items>
              <S.Items>Termos e Condições</S.Items>
            </S.Column>
            <S.Column>
              <S.Title>Redes Sociais</S.Title>
              <S.Items>Pinterest</S.Items>
              <S.Items>Facebook</S.Items>
              <S.Items>Instagram</S.Items>
            </S.Column>
          </S.Table>
        </S.Wrapper>
      </Container>
    </S.Footer>
  )
}
