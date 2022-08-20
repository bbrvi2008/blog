export type ApiListPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type ApiListMeta = {
  pagination: ApiListPagination
}

export type ResourceItemData<AttributesType> = {
  id: number
  attributes: AttributesType & {
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
  }
}

export type ListResponse<AttributesType> = {
  data: ResourceItemData<AttributesType>[]
  meta?: ApiListMeta
}

export type ItemResponse<AttributesType> = {
  data: ResourceItemData<AttributesType>
}

export type ApiListData<AttributesType> = {
  list: ListResponse<AttributesType>
}

export type ApiItemData<AttributesType> = {
  item: ItemResponse<AttributesType>
}

export type ApiResponse<DataType> = {
  data: DataType
}
