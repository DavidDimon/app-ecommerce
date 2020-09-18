import React from 'react'

import Text from '@components/atoms/Text'
import { Card, Image, Body } from './styles'

interface ICardProduct {
  title: string
  subTitle: string
  image: any
}

const CardProduct = ({ title, subTitle }: ICardProduct) => {
  return (
    <Card>
      <Image source={require('@assets/images/products/1.jpeg')} resizeMode="stretch"/>
      <Body>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </Body>
    </Card>
  )
}

export default CardProduct
