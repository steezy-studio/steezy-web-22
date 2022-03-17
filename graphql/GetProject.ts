import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query GetProject($slug: String!) {
    Project(slug: $slug) {
      grid_image {
        url(format: "webp")
        description
      }
      hero_image {
        url(format: "webp")
        description
      }
      project_name
      project_areas {
        area_name
        _slug
      }
      project_facts {
        ... on ProjectFacts {
          header
          content
        }
      }
      client_logo {
        url
      }
      project_description
      project_presentation {
        ... on ProjectGridRow {
          grid_item_image {
            url(format: "webp")
            description
          }
        }
        ... on ProjectGridVimeo {
          vimeo_id
        }
        ... on ProjectGridBlockquote {
          blockquote_text
          alignment
        }
      }
    }
  }
`;
