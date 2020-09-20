import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  InputText,
  Icon,
  Header,
  ProductsList,
  CardProduct,
  Layout,
} from '@components'
import { WrapperSearch, Space, OrderButton } from './styles'

import { products } from '@constants/products'
import { IProduct } from '@interfaces/product'
import { onSearch, orderItems } from '@services/utils/products'

export const Home = () => {
  const navigation = useNavigation()
  const [order, setOrder] = React.useState('ASC')
  const [search, setSearch] = React.useState('')
  const [data, setData] = React.useState(products)

  const handleSearch = (value: string) => {
    setSearch(value)
    const result = onSearch(products, value)
    setData([...orderItems(result, order)])
  }

  React.useEffect(() => {
    setData([...orderItems(data, order)])
  }, [order])

  return (
    <Layout>
      <Header
        title="Home"
        rightIcon="cart"
        onPressRight={() => navigation.navigate('cart')}
      >
        <WrapperSearch>
          <InputText
            placeholder="search"
            onChange={handleSearch}
            value={search}
          />
          <OrderButton
            onPress={() => setOrder(order === 'ASC' ? 'DESC' : 'ASC')}
          >
            <Icon name="currency-usd" size={20} color="#fff" />
            <Icon
              name={`arrow-${order === 'ASC' ? 'up' : 'down'}`}
              size={20}
              color="#fff"
            />
          </OrderButton>
        </WrapperSearch>
      </Header>
      <Space />
      <ProductsList items={data} numColumns={2} hasPagination>
        {(product: IProduct) => <CardProduct {...product} />}
      </ProductsList>
    </Layout>
  )
}
