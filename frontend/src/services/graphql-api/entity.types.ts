import { ItemResponse } from './types'

export type CategoryAttributes = {
  title: string
}

export type ImageAttributes = {
  url: string
}

export type PostAttributes = {
  title: string
  description: string
  text: string
  category: ItemResponse<CategoryAttributes>
  image: ItemResponse<ImageAttributes>
}
