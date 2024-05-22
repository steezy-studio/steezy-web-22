import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_LANDINGPAGE = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getLandingpage($sortLatestProjects: ProjectSortInput) {
    Areas(sort: area_order_ASC) {
      ...FragmentGetAreas
    }
    Projects(sort: $sortLatestProjects, limit: 14) {
      items {
        project_grid_name
        grid_image {
          width
          url(format: "webp")
          height
          description
          _id
          cdn_files {
            _id
            _type
            profile
            url
          }
        }
        _id
        _slug
      }
    }
  }
`;
