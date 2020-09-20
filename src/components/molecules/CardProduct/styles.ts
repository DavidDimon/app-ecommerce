import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

import normalize from '@styles/normalize'
import { ITheme } from '@interfaces/styles'

export const Card = styled.View`
  width: ${(Dimensions.get('window').width) / 2}px;
  padding-horizontal: ${normalize(10)}px;
  margin-bottom: ${normalize(12)}px;
`

export const Image = styled(FastImage)`
  width: 100%;
  height: ${normalize(100)}px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const Content = styled.View`
  padding: ${normalize(8)}px;
  height: ${normalize(110)}px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.cardBackground[theme.mode]};
`

export const Footer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`
