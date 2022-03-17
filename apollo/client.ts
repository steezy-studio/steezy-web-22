import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.API_URL}/${process.env.TOKEN}`,
  cache: new InMemoryCache(),
});

export default client;
