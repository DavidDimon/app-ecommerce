import React from 'react'

import { Header, CartItem, ProductsList, Layout, Text } from '@components'
import { Footer, Space } from './styles'

import { IProduct } from '@interfaces/product'
import { products } from '@constants/products'
import { useCartStore } from '@services/store'
import { getTotal } from '@services/utils/products'

export const Cart = () => {
  const { productIds } = useCartStore()
  const itemsOnCart: Array<IProduct> = React.useMemo(
    () =>
      products.filter((product: IProduct) => productIds.includes(product.id)),
    [productIds]
  )

  const total = getTotal(itemsOnCart)

  return (
    <Layout>
      <Header title="Cart" hasGoBack />

      <ProductsList items={itemsOnCart} full>
        {(product: IProduct) => <CartItem {...product} />}
      </ProductsList>

      <Footer>
        <Text>{`Total: $${total.toFixed(2)}`}</Text>
        <Space />
      </Footer>
    </Layout>
  )
}
