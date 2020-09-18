import styled from 'styled-components/native'

import normalize from '@styles/normalize'

export default styled.TouchableOpacity`
  padding: ${normalize(5)}px;
  background-color: ${({ color = 'primary', theme }: any) =>
    theme.colors[color][theme.mode]};
  width: 70%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  min-height: ${normalize(40)}px;
`
