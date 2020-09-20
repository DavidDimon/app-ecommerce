import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Layout,
  Header,
  ImageCarousel,
  Text,
  Icon,
  ReviewCard,
} from '@components'
import { Content, Body, Space, Footer } from './styles'

import { products } from '@constants/products'
import { IProduct } from '@interfaces/product'
import { getPriceCalculated, getRating } from '@services/utils/products'
import { useCartStore } from '@services/store'

export const Product = () => {
  const { setProductIds, productIds } = useCartStore()
  const navigation = useNavigation()
  const route = useRoute()

  const productId = route?.params?.productId

  const productSelected = React.useMemo(
    () => products.find((product: IProduct) => product.id === productId),
    [productId]
  )

  const hasInCart = productIds.includes(productId)

  return (
    <Layout>
      <Header
        title={productSelected.name}
        rightIcon="cart"
        onPressRight={() => navigation.navigate('cart')}
        hasGoBack
      />
      <Space />
      <ImageCarousel images={productSelected.images} />
      <Content>
        <Body>
          <Text>{`Description: ${productSelected.description}`}</Text>
          <Text>{`Rating: ${getRating(productSelected.reviews)}`}</Text>
          {!!productSelected.reviews?.length && (
            <>
              <Space />
              <Text size={20}>{'Reviews:'}</Text>
              {productSelected.reviews.map((review: IReview, index: number) => (
                <ReviewCard key={`review_${index}`} {...review} />
              ))}
            </>
          )}
        </Body>
        <Footer>
          <Text>
            {`${getPriceCalculated(
              productSelected.price,
              productSelected.discount
            )}`}
          </Text>
          {hasInCart ? (
            <Icon
              name="cart-remove"
              size={25}
              bgColor="error"
              color="#fff"
              onPress={() => setProductIds(productId)}
              hasBackground
            />
          ) : (
            <Icon
              name="cart-plus"
              size={25}
              color="#fff"
              onPress={() => setProductIds(productId)}
              hasBackground
            />
          )}
        </Footer>
      </Content>
    </Layout>
  )
}
