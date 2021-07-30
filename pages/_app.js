import { ChakraProvider } from "@chakra-ui/react"
import client from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
