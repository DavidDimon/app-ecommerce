import styled from 'styled-components/native'

import { ITheme } from '@interfaces/styles'
import normalize from '@styles/normalize'

export const Card = styled.View`
  margin-vertical: ${normalize(8)}px;
  padding: ${normalize(6)}px;
  padding-horizontal: ${normalize(12)}px;
  border-radius: 6px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.cardBackground[theme.mode]};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const WrapperRating = styled.View`
  flex-direction: row;
`