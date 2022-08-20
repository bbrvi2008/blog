import { combineReducers } from '@reduxjs/toolkit'

import { posts } from '@features'

export const rootReducer = combineReducers({
  [posts.postsApi.reducerPath]: posts.postsApi.reducer,
})
