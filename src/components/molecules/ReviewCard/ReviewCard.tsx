import React from 'react'

import { Text, Icon } from '@components/atoms'
import { Card, Header, WrapperRating } from './styles'

import { IReview } from '@interfaces/product'

const ReviewCard = ({ commentary, author, rate }: IReview) => (
  <Card>
    <Header>
      <Text>{author}</Text>

      <WrapperRating>
        <Text>{rate}</Text>
        <Icon name="star" size={20} color="yellow" />
      </WrapperRating>
    </Header>
    <Text>{commentary}</Text>
  </Card>
)

export default ReviewCard
