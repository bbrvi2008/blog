import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { ApiItemData, ApiListData, PostAttributes } from '@services/graphql-api'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: graphqlRequestBaseQuery({ url: '/graphql' }),
  endpoints: (builder) => {
    return {
      getPost: builder.query<ApiItemData<PostAttributes>, string>({
        query: (id) => {
          return {
            document: gql`
              query GetPost {
                item: post(id: ${id}) {
                  data {
                    id
                    attributes {
                      title
                      text
                      category {
                        data {
                          id
                          attributes {
                            title
                          }
                        }
                      }
                      createdAt
                      updatedAt
                      publishedAt
                    }
                  }
                }
              }
            `,
          }
        },
      }),
      getPosts: builder.query<ApiListData<PostAttributes>, void>({
        query: () => {
          return {
            document: gql`
              query GetPosts {
                list: posts {
                  data {
                    id
                    attributes {
                      title
                      description
                      text
                      image {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      category {
                        data {
                          id
                          attributes {
                            title
                          }
                        }
                      }
                      createdAt
                      updatedAt
                      publishedAt
                    }
                  }
                  meta {
                    pagination {
                      total
                      page
                      pageSize
                      pageCount
                    }
                  }
                }
              }
            `,
          }
        },
      }),
    }
  },
})
