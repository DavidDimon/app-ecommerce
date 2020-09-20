import create from 'zustand'

export const [useCartStore] = create((set: any) => ({
  productIds: [],
  setProductIds: (id: number) =>
    set(({ productIds }: { productIds: Array<number> }) => {
      if (productIds.includes(id)) {
        return {
          productIds: productIds.filter(
            (idProduct: number) => idProduct !== id
          ),
        }
      }

      return { productIds: [...productIds, id] }
    }),
}))
