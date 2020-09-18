import styled from 'styled-components/native'
import { ITheme } from '@interfaces/styles'

import normalize from '@styles/normalize'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.background[theme.mode]};
`

export const WrapperSearch = styled.View`
  flex-direction: row;
  max-width: 90%;
  padding: ${normalize(16)}px;
`

export const Space = styled.View`
  margin-bottom: ${normalize(12)}px;
`