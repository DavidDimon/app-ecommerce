import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import normalize from '@styles/normalize'

export const Card = styled.View`
  width: ${(Dimensions.get('window').width - normalize(10)) / 2}px;
  padding-horizontal: ${normalize(10)}px;
  margin-bottom: ${normalize(12)}px;
`

export const Image = styled.Image`
  width: 100%;
  height: ${normalize(100)}px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const Body = styled.View`
  padding: ${normalize(8)}px;
  height: ${normalize(70)}px;
  border: 1px solid #3d3d3d;
  border-top-width: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
