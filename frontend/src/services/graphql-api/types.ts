import { GetServerSidePropsContext } from 'next'
import { SSRData } from 'next-urql'
import { ParsedUrlQuery } from 'querystring'
import { Client } from 'urql'

export type PageProps = {
  urqlState: SSRData
}

export type DataFetcher<Q extends ParsedUrlQuery = ParsedUrlQuery> = (
  client: Client | null,
  context: GetServerSidePropsContext<Q>,
) => Promise<void>
