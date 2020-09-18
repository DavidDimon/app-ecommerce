import { Home, Product, Cart } from '@screens'

export interface IRoute {
  name: string
  component: Element
}

export const routes = [
  {
    name: 'home',
    component: Home,
  },
  {
    name: 'product',
    component: Product,
  },
  {
    name: 'cart',
    component: Cart,
  },
]
