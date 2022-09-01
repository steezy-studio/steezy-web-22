import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_PROJECT = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query GetProject($slug: String!) {
    Areas(sort: area_order_ASC) {
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
      client_name
      client_position
      client_quote
      client_photo {
        url
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
      next_project {
        _slug
        project_tags {
          _id
          area_name
        }
        hero_image {
          url
          width
          height
        }
        project_grid_name
      }
      project_description
      project_presentation {
        __typename
        ... on ProjectGridRow {
          _id
          grid_item_image {
            _type
            _id
            url(format: "webp")
            width
            height
            description
            cdn_files {
              _id
              _type
              profile
              url
            }
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
