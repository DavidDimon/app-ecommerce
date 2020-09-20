import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

import normalize from '@styles/normalize'

export const Wrapper = styled.View`
  height: ${normalize(220)}px;
`

export const Image = styled(FastImage)`
  width: ${Dimensions.get('window').width - 50}px;
  height: ${normalize(200)}px;
  border-radius: 6px;
`
