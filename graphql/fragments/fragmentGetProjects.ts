import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  fragment FragmentGetProjects on Projects {
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
      project_grid_name
    }
  }
`;
