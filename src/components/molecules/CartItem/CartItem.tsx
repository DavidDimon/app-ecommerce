import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text, Icon } from '@components/atoms'
import { Wrapper, Card, Image, RemoveButton } from './styles'

import { IProduct } from '@interfaces/product'
import { useCartStore } from '@services/store'
import { getRating, getPriceCalculated } from '@services/utils/products'

const CartItem = ({ name, id, images, reviews, price, discount }: IProduct) => {
  const navigation = useNavigation()
  const { setProductIds } = useCartStore()

  const rating: string | number = React.useMemo(() => getRating(reviews), [
    reviews,
  ])

  const priceLabel = React.useMemo(() => getPriceCalculated(price, discount), [
    price,
    discount,
  ])

  return (
    <Wrapper>
      <TouchableOpacity
        onPress={() => navigation.navigate('product', { productId: id })}
      >
        <Image source={images[0]} resizeMode="stretch" />
      </TouchableOpacity>
      <Card>
        <Text>{name}</Text>
        <Text>{`Rating: ${rating}`}</Text>
        <Text>{priceLabel}</Text>
      </Card>
      <RemoveButton onPress={() => setProductIds(id)}>
        <Icon name="cart-remove" size={20} color="#fff" />
      </RemoveButton>
    </Wrapper>
  )
}

export default CartItem
