// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { PostDetailItem } from './PostListItem.fragment';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PostVariables = Types.Exact<{
  id: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type Post = { __typename: 'Query', item: { __typename: 'PostEntityResponse', data: { __typename: 'PostEntity', id: string, attributes: { __typename: 'Post', title: string, text: string, createdAt: any, updatedAt: any, publishedAt: any, category: { __typename: 'CategoryEntityResponse', data: { __typename: 'CategoryEntity', id: string, attributes: { __typename: 'Category', title: string } } } } } } };


export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostDetailItem"}}]}}]}}]}},...PostDetailItem.definitions]} as unknown as DocumentNode;

export function usePost(options?: Omit<Urql.UseQueryArgs<PostVariables>, 'query'>) {
  return Urql.useQuery<Post, PostVariables>({ query: PostDocument, ...options });
};