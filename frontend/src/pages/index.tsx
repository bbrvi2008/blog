import { PostsList } from '@features/posts'
import { Container } from '@mui/material'

import { withUrqlClient, initUrqlClient } from 'next-urql'
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from 'urql'

import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Posts,
  PostsDocument,
  PostsVariables,
  usePosts,
} from '@features/posts/queries/__generated__/Posts'

const Home: NextPage = () => {
  const [{ data }] = usePosts()

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Head>
        <title>Atricles</title>
        <meta name="description" content="Articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Blog</h1>

        {data?.list && <PostsList {...data?.list} />}
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const ssrCache = ssrExchange({ isClient: false })
  const client = initUrqlClient(
    {
      url: 'http://backend:1337/graphql',
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false,
  )

  await client?.query<Posts, PostsVariables>(PostsDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}

export default withUrqlClient(() => {
  return {
    url: 'http://localhost:900/graphql',
  }
})(Home)
