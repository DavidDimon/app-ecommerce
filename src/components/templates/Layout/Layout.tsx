import styled from 'styled-components/native'
import { ITheme } from '@interfaces/styles'

export default styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.background[theme.mode]};
`
