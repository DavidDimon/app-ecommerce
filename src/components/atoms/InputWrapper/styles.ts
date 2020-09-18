import styled from 'styled-components/native'
import Text from '@components/atoms/Text'
import normalize from '@styles/normalize'

import { ITheme } from '@interfaces/styles'
 
interface IWrapper {
  noMargin?: boolean
}

export const Wrapper = styled.View`
  ${({ noMargin }: IWrapper) =>
    !noMargin && `margin-horizontal: ${normalize(20)}px;`}
`

interface IContent {
  error?: string
  isSelected: boolean
  disabled?: boolean
  height?: number
  theme: ITheme
}

export const Content = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  border: 1px solid
    ${({ error, isSelected, theme }: IContent) =>
      isSelected || !!error
        ? error
          ? theme.colors.error[theme.mode]
          : theme.colors.primary[theme.mode]
        : theme.colors.default[theme.mode]};
  border-radius: 4px;
  height: ${({ height }: IContent) => normalize(height || 40)}px;
  padding-horizontal: ${normalize(15)}px;
  background-color: transparent;
  align-items: center;
  flex-direction: row;
  ${({ disabled }: IContent) => disabled && 'opacity: 0.7;'}
`

interface ILabel {
  error?: string
  theme: ITheme
}

export const Label = styled(Text)`
  color: ${({ error, theme }: ILabel) =>
    error ? theme.colors.error[theme.mode] : theme.colors.text[theme.mode]};
  margin-bottom: 5px;
`

export const LabelWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
