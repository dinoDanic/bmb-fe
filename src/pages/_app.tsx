import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import type { AppProps } from 'next/app'
import { setContext } from '@apollo/client/link/context'
import { Normalize } from 'styles'
import { Auth } from 'modules/Auth'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { Content } from 'modules/app'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('bmb-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Normalize />
        <Auth>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Auth>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
