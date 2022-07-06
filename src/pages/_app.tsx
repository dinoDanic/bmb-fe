import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import type { AppProps } from 'next/app'
import { setContext } from '@apollo/client/link/context'
import { Normalize } from 'styles'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token-bmb')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Normalize />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
