import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Layout, Header } from '@components'
import { products } from '@constants/products'
import { IProduct } from '@interfaces/product'

export const Product = (): Element => {
  const navigation = useNavigation()
  const route = useRoute()

  const productId = route?.params?.productId

  const productSelected = React.useMemo(
    () => products.find((product: IProduct) => product.id === productId),
    [productId]
  )

  return (
    <Layout>
      <Header
        title={productSelected.name}
        rightIcon="cart"
        onPressRight={() => navigation.navigate('cart')}
        hasGoBack
      />
    </Layout>
  )
}
