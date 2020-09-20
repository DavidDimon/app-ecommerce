import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Text, Icon } from '@components/atoms'

import { Container, EmptyView, HeaderWrapper } from './styles'

interface IHeader {
  children: Element
  title: string
  hasGoBack: boolean
  rightIcon: string
  onPressRight: () => null
}

const Header = ({
  children,
  hasGoBack,
  title,
  rightIcon,
  onPressRight,
}: IHeader) => {
  const navigation = useNavigation()
  return (
    <Container>
      <HeaderWrapper>
        {hasGoBack ? (
          <Icon
            name="chevron-left"
            size={30}
            color="#fff"
            onPress={() => navigation.goBack()}
            hasBackground
          />
        ) : (
          <EmptyView />
        )}
        <Text color="#fff" weight="bold">{title}</Text>

        {!!onPressRight ? (
          <Icon
            name={rightIcon}
            size={25}
            color="#fff"
            onPress={onPressRight}
            hasBackground
          />
        ) : (
          <EmptyView />
        )}
      </HeaderWrapper>
      {children}
    </Container>
  )
}

export default Header
