export interface IPhoto {
  id: number
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: string
  discount?: number
  review?: Array<number>
  images: Array<IPhoto>
}