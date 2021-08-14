import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.NODE_ENV === "production" ? "https://caminandoapieadmin.vercel.app/graphql" : "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only"
    }
  }
})