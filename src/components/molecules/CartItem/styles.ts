import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

import normalize from '@styles/normalize'
import { ITheme } from '@interfaces/styles'

export const Wrapper = styled.View`
  flex: 1;
  margin-horizontal: ${normalize(6)}px;
  margin-vertical: ${normalize(12)}px;
  flex-direction: row;
`

export const Card = styled.View`
  flex: 1;
  height: ${normalize(100)}px;
  padding: ${normalize(12)}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.cardBackground[theme.mode]};
`

export const Image = styled(FastImage)`
  width: ${normalize(100)}px;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`

export const RemoveButton = styled.TouchableOpacity`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  align-items: center;
  justify-content: center;
  width: ${normalize(50)}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.error[theme.mode]};
`
