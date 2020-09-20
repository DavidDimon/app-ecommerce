import styled from 'styled-components/native'

import normalize from '@styles/normalize'
import { ITheme } from '@interfaces/styles'

export const Space = styled.View`
  margin-left: ${normalize(10)}px;
`

export const Footer = styled.SafeAreaView`
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: ${normalize(70)}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.brand[theme.mode]};
`
