import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { routes, IRoute } from './routes'

const Stack = createStackNavigator()

const Routes = () => (
  <Stack.Navigator initialRouteName={routes[0].name} headerMode="none">
    {routes.map((item: IRoute, index: number) => (
      <Stack.Screen
        key={`unAuth_${index}`}
        name={item.name}
        component={item.component}
      />
    ))}
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
)

export default Navigation
