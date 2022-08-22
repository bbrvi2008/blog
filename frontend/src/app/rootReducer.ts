import { combineReducers } from '@reduxjs/toolkit'

import { generatedApi } from '@services/graphql-api'

export const rootReducer = combineReducers({
  [generatedApi.reducerPath]: generatedApi.reducer,
})
