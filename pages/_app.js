import { ChakraProvider, Box } from "@chakra-ui/react"
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
        <Box>
          <div id="snipcart" data-config-modal-style="null" data-api-key={process.env.SNIPCART_API_KEY} hidden></div>
        </Box>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
