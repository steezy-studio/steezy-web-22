import { gql } from "@apollo/client";

export const GET_PRODUCTS_HANDLES = gql`
  query Nodes($first: Int) {
    products(first: $first) {
      nodes {
        handle
      }
    }
  }
`;
