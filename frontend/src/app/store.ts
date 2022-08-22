import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { posts } from '@features'
import { rootReducer } from './rootReducer'
import { generatedApi } from '@services/graphql-api'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(generatedApi.middleware)
  },
})

setupListeners(store.dispatch)
