import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Product(
    $handle: String
    $variantsFirst2: Int
    $transform: ImageTransformInput
    $imagesFirst2: Int
    $identifiers: [HasMetafieldsIdentifier!]!
  ) {
    product(handle: $handle) {
      title
      handle
      availableForSale
      variants(first: $variantsFirst2) {
        nodes {
          title
          selectedOptions {
            value
            name
          }
          price {
            currencyCode
            amount
          }
          id
          quantityAvailable
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          currencyCode
          amount
        }
      }
      id
      featuredImage {
        height
        width
        url(transform: $transform)
        altText
        id
      }
      description
      metafields(identifiers: $identifiers) {
        value
        type
        key
        reference {
          ... on MediaImage {
            __typename
            image {
              url
              width
              height
              id
            }
          }
          ... on Video {
            __typename
            previewImage {
              url
              width
              height
              id
            }
            mediaContentType
            sources {
              width
              url
              height
              format
            }
            id
          }
        }
      }
      images(first: $imagesFirst2) {
        nodes {
          height
          width
          url(transform: $transform)
          altText
          id
        }
      }
    }
  }
`;
