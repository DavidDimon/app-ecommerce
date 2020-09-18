import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text, InputText, Icon, Header, ProductsList } from '@components'
import { WrapperSearch, Space } from './styles'

import { products } from '@constants/products'

export const Home = (): Element => {
  const navigation = useNavigation()
  return (
    <View>
      <Header
        title="Home"
        rightIcon="cart"
        onPressRight={() => navigation.navigate('cart')}
      >
        <WrapperSearch>
          <InputText placeholder="search" />
          <Icon name="filter-variant" size={30} color="#fff" hasBackground />
        </WrapperSearch>
      </Header>
      <Space />
      <ProductsList items={products} />
    </View>
  )
}
