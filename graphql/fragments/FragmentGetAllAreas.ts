import { gql } from "@apollo/client";

export const FRAGMENT_GET_ALL_AREAS = gql`
  fragment FragmentGetAreas on Areas {
    items {
      area_name
      _slug
    }
  }
`;
