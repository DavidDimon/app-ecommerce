import styled from 'styled-components/native'

import normalize from '@styles/normalize'
import { ITheme } from '@interfaces/styles'

export const WrapperSearch = styled.View`
  flex-direction: row;
  max-width: 88%;
  padding: ${normalize(16)}px;
`

export const Space = styled.View`
  margin-bottom: ${normalize(12)}px;
`

export const OrderButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${normalize(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(6)}px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.primary[theme.mode]};
`
