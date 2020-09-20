import React from 'react'
import { Dimensions } from 'react-native'

import { FlatList, StyleSheet, View } from 'react-native'

import { IProduct } from '@interfaces/product'

interface IProductsList {
  items: Array<IProduct>
  children: React.FC
  numColumns?: number
  full?: boolean
  hasPagination?: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  fullWrapper: {
    width: Dimensions.get('window').width - 10,
  },
})

const ProductsList = ({
  items,
  children,
  numColumns,
  full,
  hasPagination,
}: IProductsList) => {
  const [page, setPage] = React.useState<number>(1)
  const [data, setData] = React.useState<Array<IProduct>>(items.slice(0, 10))

  const handleOnEndReached = React.useCallback(() => {
    const maxPages = Math.round(items.length / 10.4)
    if (page < maxPages) {
      const current = page + 1
      setData(items.slice(0, 10 * current))
      setPage(current)
    }
  }, [])

  return (
    <FlatList
      data={hasPagination ? data : items}
      onEndReachedThreshold={0.05}
      onEndReached={hasPagination ? handleOnEndReached : null}
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
}

export default ProductsList
