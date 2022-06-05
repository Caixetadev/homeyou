import { ReactNode } from 'react'

import * as S from './styles'

export function Button({ children }: { children: ReactNode }) {
  return <S.Button>{children}</S.Button>
}
