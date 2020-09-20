import { IProduct, IReview } from '@interfaces/product'

export const getRating = (reviews: Array<IReview>) => {
  if (!reviews?.length) return 'No reviews yet'
  const sumReview = reviews.reduce(
    (memo: number, cur: IReview) => memo + cur.rate,
    0
  )
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

export const normalizeValue = (value: string) =>
  value
    ? value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    : ''

export const onSearch = (items: Array<IProduct>, search: string) =>
  items.filter((product: IProduct) =>
    normalizeValue(product.name).includes(normalizeValue(search))
  )

export const orderItems = (items: Array<IProduct>, order: 'ASC' | 'DESC') =>
  items.sort((a: IProduct, b: IProduct) => (order === 'ASC' ? a.price - b.price : b.price - a.price))
