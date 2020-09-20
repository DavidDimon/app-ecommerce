import { IProduct } from '@interfaces/product'

export const getRating = (reviews: Array<number>) => {
  if (!reviews?.length) return 'No reviews yet'
  const sumReview = reviews.reduce((memo: number, cur: number) => memo + cur, 0)
  return (sumReview / reviews.length).toFixed(1)
}

export const getPriceCalculated = (price: number, discount: number) => {
  if (discount)
    return `$${((100 * discount) / price).toFixed(2)} (-${discount}%)`
  return `$${price.toFixed(2)}`
}

export const getTotal = (items: Array<IProduct>) => {
  if (!items?.length) return 0

  return items.reduce(
    (memo: number, cur: IProduct) =>
      memo + (cur.discount ? (100 * cur.discount) / cur.price : cur.price),
    0
  )
}
