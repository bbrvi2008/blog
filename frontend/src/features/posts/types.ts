import {
  ListResponse,
  PostAttributes,
  ResourceItemData,
} from '@services/graphql-api'

export type Post = ResourceItemData<PostAttributes>
export type PostList = ListResponse<PostAttributes>
