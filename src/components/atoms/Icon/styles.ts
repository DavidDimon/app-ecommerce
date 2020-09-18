import styled from 'styled-components/native'

import { ITheme } from '@interfaces/styles'
import normalize from '@styles/normalize'

interface IIconWrapper {
  hasBackground: boolean
  bgColor?: string
  theme: ITheme
}

export const IconWrapper = styled.TouchableOpacity`
  ${({ hasBackground, bgColor, theme }: IIconWrapper) =>
    hasBackground &&
    `padding: ${normalize(6)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${normalize(6)}px;
    background-color: ${
      bgColor
        ? theme.colors[bgColor]
          ? theme.colors[bgColor][theme.mode]
          : bgColor
        : theme.colors.primary[theme.mode]
    };`}
`
