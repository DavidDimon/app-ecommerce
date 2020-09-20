import React from 'react'
import { Dimensions } from 'react-native'

import { FlatList, StyleSheet, View } from 'react-native'

import { IProduct } from '@interfaces/product'

interface IProductsList {
  items: Array<IProduct>
  children: React.FC
  numColumns?: number
  full?: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  fullWrapper: {
    width: Dimensions.get('window').width - 10,
  },
})

const ProductsList = ({ items, children, numColumns, full }: IProductsList) => (
  <FlatList
    data={items}
    contentContainerStyle={styles.container}
    extraData={items}
    numColumns={numColumns}
    keyExtractor={(item, index) => `${item}_${index}`}
    renderItem={({ item, index }: { item: IProduct; index: number }) => (
      <View
        style={full ? styles.fullWrapper : {}}
        key={`product_${item.id}_${index}`}
      >
        {children(item)}
      </View>
    )}
  />
)

export default ProductsList
