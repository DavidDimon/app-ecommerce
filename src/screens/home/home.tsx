import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  InputText,
  Icon,
  Header,
  ProductsList,
  CardProduct,
  Layout,
} from '@components'
import { WrapperSearch, Space } from './styles'

import { products } from '@constants/products'
import { IProduct } from '@interfaces/product'

export const Home = (): Element => {
  const navigation = useNavigation()
  return (
    <Layout>
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
      <ProductsList items={products} numColumns={2}>
        {(product: IProduct) => <CardProduct {...product} />}
      </ProductsList>
    </Layout>
  )
}
