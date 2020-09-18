import create from 'zustand'
import { IProduct } from '@interfaces/product'

export const [useCart] = create((set: any) => ({
  products: [],
  setProducts: (products: IProduct) => set(() => ({ products })),
}))
