import { createClient } from 'urql'

export const client = createClient({
  url: 'http://localhost:900/graphql',
})
