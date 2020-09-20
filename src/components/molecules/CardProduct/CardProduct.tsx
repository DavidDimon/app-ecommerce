import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text, Button, Icon } from '@components/atoms'
import { Card, Image, Content, Footer } from './styles'

import { IProduct } from '@interfaces/product'
import { useCartStore } from '@services/store'
import { getRating, getPriceCalculated } from '@services/utils/products'

const CardProduct = ({
  name,
  reviews,
  price,
  images,
  id,
  discount,
}: IProduct) => {
  const { productIds, setProductIds } = useCartStore()
  const navigation = useNavigation()
  const rating: string | number = React.useMemo(() => getRating(reviews), [
    reviews,
  ])

  const priceLabel = React.useMemo(() => getPriceCalculated(price, discount), [
    price,
    discount,
  ])

  const hasInCart = productIds.includes(id)

  const addProduct = () => {
    setProductIds(id)
    if (!hasInCart) navigation.navigate('cart')
  }

  return (
    <Card>
      <TouchableOpacity
        onPress={() => navigation.navigate('product', { productId: id })}
      >
        <Image source={images[0]} resizeMode="stretch" />
      </TouchableOpacity>
      <Content>
        <Text>{name}</Text>
        <Text>{`Rating: ${rating}`}</Text>
        <Footer>
          <Button
            width="100%"
            onPress={addProduct}
            color={hasInCart ? 'error' : 'primary'}
          >
            {hasInCart ? (
              <Icon name="cart-remove" size={20} color="#fff" />
            ) : (
              <Text color="#fff">{priceLabel}</Text>
            )}
          </Button>
        </Footer>
      </Content>
    </Card>
  )
}

export default CardProduct
