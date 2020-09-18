import React from 'react'

import { FlatList, StyleSheet } from 'react-native'
import { CardProduct } from '@components/atoms'

import { IProduct } from '@interfaces/product'

interface IProductsList {
  items: Array<IProduct>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

const ProductsList = ({ items }: IProductsList) => {
  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.container}
      extraData={items}
      numColumns={2}
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={({ item, index }) => (
        <CardProduct
          key={`product_${item.id}_${index}`}
          title={item.name}
          subTitle={`$${item.price}`}
          image={item.images[0]}
        />
      )}
    />
  )
}

export default ProductsList
