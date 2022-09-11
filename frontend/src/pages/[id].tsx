import type { NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import { Box, Container } from '@mui/material'
import { PostDocument, PostVariables, usePost } from '@features/posts/queries/__generated__/Post'
import { withUrqlClient } from 'next-urql'
import { buildUrqlGetServerSideProps, getClientConfig } from '@services/graphql-api'
import { Post } from '@features/posts/types'

export type PostParams = {
  id: string
}

const Post: NextPage = () => {
  const { query } = useRouter()
  const { id } = query as PostParams

  const [{ data }] = usePost({ variables: { id } })

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Head>
        <title>{data?.item.data.attributes.title ?? 'Article'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{data?.item.data.attributes.title}</h1>

        <Box
          sx={{
            textAlign: 'left',
            overflow: 'hidden',
            '& img': { maxWidth: '100%' },
          }}
        >
          {data?.item.data.attributes.text && (
            <ReactMarkdown>{data?.item.data.attributes.text}</ReactMarkdown>
          )}
        </Box>
      </main>
    </Container>
  )
}

export const getServerSideProps = buildUrqlGetServerSideProps<PostParams>(
  async (client, { params }) => {
    const { id } = params ?? {}
    if (id) {
      await client?.query<Post, PostVariables>(PostDocument, { id }).toPromise()
    }
  },
)

export default withUrqlClient(getClientConfig)(Post)
