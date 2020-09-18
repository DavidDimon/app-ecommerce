import React from 'react'

//@ts-ignore
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconWrapper } from './styles'

interface IIcon {
  hasBackground: boolean
  bgColor: string
  onPress: () => null
  name: string
  size: number
  color: string
}

const Icon = ({ hasBackground, bgColor, onPress, ...props }: IIcon) => (
  <IconWrapper
    onPress={onPress}
    hasBackground={hasBackground}
    bgColor={bgColor}
  >
    <VectorIcon {...props} />
  </IconWrapper>
)

export default Icon
