import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  fragment FragmentGetProjects on Projects {
    items {
      _id
      _slug
      grid_image {
        url(format: "webp")
        width
        height
        description
      }
      project_grid_name
      project_tags {
        area_name
        _id
        _slug
      }
    }
  }
`;
