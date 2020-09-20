import styled from 'styled-components/native'

import normalize from '@styles/normalize'
import { ITheme } from '@interfaces/styles'

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const Body = styled.ScrollView`
  padding: ${normalize(12)}px;
`

export const Space = styled.View`
  margin-top: ${normalize(12)}px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${normalize(16)}px;
  border-radius: 12px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.brand[theme.mode]};
`
