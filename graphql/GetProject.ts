import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_PROJECT = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query GetProject($slug: String!) {
    Areas {
      ...FragmentGetAreas
    }
    Project(slug: $slug) {
      grid_image {
        url(format: "webp")
        description
        _type
      }
      hero_image {
        url(format: "webp")
        width
        height
        description
        _type
      }
      project_detail_name
      project_tags {
        area_name
        _slug
      }
      project_facts {
        ... on ProjectFacts {
          __typename
          _id
          header
          content
        }
      }
      client_logo {
        url
      }
      project_description
      project_presentation {
        __typename
        ... on ProjectGridRow {
          _id
          grid_item_image {
            url(format: "webp")
            width
            height
            description
          }
        }
        ... on ProjectGridVimeo {
          _id
          vimeo_id
        }
        ... on ProjectGridBlockquote {
          _id
          blockquote_text
          alignment
        }
      }
    }
  }
`;
