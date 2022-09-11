import { PostsList } from '@features/posts'
import { Container } from '@mui/material'

import { withUrqlClient } from 'next-urql'

import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Posts,
  PostsDocument,
  PostsVariables,
  usePosts,
} from '@features/posts/queries/__generated__/Posts'
import { buildUrqlGetServerSideProps, getClientConfig } from '@services/graphql-api'

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

export const getServerSideProps = buildUrqlGetServerSideProps(async (client) => {
  await client?.query<Posts, PostsVariables>(PostsDocument, {}).toPromise()
})

export default withUrqlClient(getClientConfig)(Home)
