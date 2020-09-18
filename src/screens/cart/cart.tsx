import React from 'react'
import { View } from 'react-native'

import { Header } from '@components'

export const Cart = (): Element => {
  return (
    <View>
      <Header title="Cart" hasGoBack />
    </View>
  )
}
