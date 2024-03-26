import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;
function getClient() {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TOKEN}`,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });
  }

  return client;
}

export const withApolloClient = (Page) => {
  return (props) => {
    return (
      <ApolloProvider client={client}>
        <Page {...props} />
      </ApolloProvider>
    );
  };
};

export default getClient;
