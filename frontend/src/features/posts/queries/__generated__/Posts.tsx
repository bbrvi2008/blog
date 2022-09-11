// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { PostListItem } from './PostListItem.fragment';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PostsVariables = Types.Exact<{ [key: string]: never; }>;


export type Posts = { __typename: 'Query', list: { __typename: 'PostEntityResponseCollection', data: Array<{ __typename: 'PostEntity', id: string, attributes: { __typename: 'Post', title: string, description: string, text: string, createdAt: any, updatedAt: any, publishedAt: any, image: { __typename: 'UploadFileEntityResponse', data: { __typename: 'UploadFileEntity', attributes: { __typename: 'UploadFile', url: string } } }, category: { __typename: 'CategoryEntityResponse', data: { __typename: 'CategoryEntity', id: string, attributes: { __typename: 'Category', title: string } } } } }>, meta: { __typename: 'ResponseCollectionMeta', pagination: { __typename: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } };


export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"list"},"name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostListItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}}]}}]}},...PostListItem.definitions]} as unknown as DocumentNode;

export function usePosts(options?: Omit<Urql.UseQueryArgs<PostsVariables>, 'query'>) {
  return Urql.useQuery<Posts, PostsVariables>({ query: PostsDocument, ...options });
};