import styled from 'styled-components/native'

import normalize from '@styles/normalize'
import { parseStyleValue } from '@styles/parser'

interface IButton {
  width: number | string
}

export default styled.TouchableOpacity`
  padding: ${normalize(5)}px;
  background-color: ${({ color = 'primary', theme }: any) =>
    theme.colors[color][theme.mode]};
  ${({ width }: IButton) => width && `width: ${parseStyleValue(width)};`}
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  min-height: ${normalize(40)}px;
`
