import styled from 'styled-components/native'

import { ITheme } from '@interfaces/styles'
import normalize from '@styles/normalize'

interface IText {
  color?: string
  size?: number
  weight?: 'normal' | 'semiBold' | 'bold'
  theme: ITheme
}

export default styled.Text`
  color: ${({ color, theme }: IText) => color || theme.colors.text[theme.mode]};
  font-size: ${({ size }: IText) => normalize(size || 14)}px;
  ${({ weight }: IText) => weight && `font-weight: ${weight};`}
`
