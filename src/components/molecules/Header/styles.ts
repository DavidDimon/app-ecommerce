import styled from 'styled-components/native'

import { ITheme } from '@interfaces/styles'
import normalize from '@styles/normalize'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.brand[theme.mode]};
  border-bottom-left-radius: ${normalize(12)}px;
  border-bottom-right-radius: ${normalize(12)}px;
`

export const EmptyView = styled.View`
  width: ${normalize(35)}px;
`

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${normalize(16)}px;
  margin-bottom: ${normalize(8)}px;
`