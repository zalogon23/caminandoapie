import { ChakraProvider } from "@chakra-ui/react"
import client from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
