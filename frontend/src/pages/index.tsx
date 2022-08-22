import { PostsList } from '@features/posts'
import { Container } from '@mui/material'
import { generatedApi } from '@services/graphql-api'
import { PostEntityResponseCollection } from '@services/graphql-api/graphql'

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { data } = generatedApi.usePostsQuery()

  console.log('Home', data?.list)

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

export default Home
