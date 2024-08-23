import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  fragment FragmentGetProjects on Projects {
    total
    items {
      _id
      _slug
      grid_image {
        _type
        url(format: "webp")
        width
        height
        description
        cdn_files {
          url
        }
      }
      # landingpage_grid_image {
      #   url(format: "webp")
      #   _type
      #   description
      #   width
      #   height
      #   cdn_files {
      #     _id
      #     _type
      #     profile
      #     url
      #   }
      # }
      project_grid_name
    }
  }
`;
