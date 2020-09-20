export interface IPhoto {
  id: number
}

export interface IReview {
  author: string
  rate: number
  commentary: string
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: string
  discount?: number
  reviews?: Array<IReview>
  images: Array<IPhoto>
}