import { GetServerSideProps } from 'next'
import { initUrqlClient, NextUrqlClientConfig } from 'next-urql'
import { ParsedUrlQuery } from 'querystring'
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from 'urql'
import { DataFetcher, PageProps } from './types'
import { config } from '@services'

export const getClientConfig: NextUrqlClientConfig = () => {
  return {
    url: config.clientUrlApi,
  }
}

export const buildUrqlGetServerSideProps = <Q extends ParsedUrlQuery = ParsedUrlQuery>(
  fetchData: DataFetcher<Q>,
): GetServerSideProps<PageProps, Q> => {
  return async (context) => {
    const ssrCache = ssrExchange({ isClient: false })
    const client = initUrqlClient(
      {
        url: config.serverUrlApi,
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
