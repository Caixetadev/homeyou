import { ReactNode } from 'react'

import * as S from './styles'

export function Title({ children }: { children: ReactNode }) {
  return <S.Title>{children}</S.Title>
}
