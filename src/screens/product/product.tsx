import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@components'

export const Product = (): Element => {
  const navigation = useNavigation()
  return (
    <View>
      <Header
        title="Home"
        rightIcon="cart"
        onPressRight={() => navigation.navigate('cart')}
        hasGoBack
      />
    </View>
  )
}
