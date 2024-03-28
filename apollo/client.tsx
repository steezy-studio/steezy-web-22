import { ApolloClient, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;

function getClient(endpoint: "prepr" | "shopify" = "prepr") {
  if (!client || typeof window === "undefined") {
    const headers =
      endpoint === "shopify"
        ? {
            "X-Shopify-Storefront-Access-Token":
              process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
          }
        : {};

    client = new ApolloClient({
      uri:
        endpoint === "shopify"
          ? process.env.NEXT_PUBLIC_SHOPIFY_API_URL
          : `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TOKEN}`,
      headers,
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

export default getClient;
