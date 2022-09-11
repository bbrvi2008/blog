import { GetServerSideProps } from 'next'
import { initUrqlClient, NextUrqlClientConfig } from 'next-urql'
import { ParsedUrlQuery } from 'querystring'
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from 'urql'
import { DataFetcher, PageProps } from './types'

export const getClientConfig: NextUrqlClientConfig = () => {
  return {
    url: 'http://localhost:900/graphql',
  }
}

export const buildUrqlGetServerSideProps = <Q extends ParsedUrlQuery = ParsedUrlQuery>(
  fetchData: DataFetcher<Q>,
): GetServerSideProps<PageProps, Q> => {
  return async (context) => {
    const ssrCache = ssrExchange({ isClient: false })
    const client = initUrqlClient(
      {
        url: 'http://backend:1337/graphql',
        exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      },
      false,
    )

    await fetchData(client, context)

    return {
      props: {
        urqlState: ssrCache.extractData(),
      },
    }
  }
}
