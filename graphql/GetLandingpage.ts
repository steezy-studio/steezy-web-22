import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_LANDINGPAGE = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getLandingpage($sortLatestProjects: ProjectSortInput) {
    Areas(sort: area_order_ASC) {
      ...FragmentGetAreas
    }
    Projects(sort: $sortLatestProjects, limit: 10) {
      items {
        project_grid_name
        landingpage_grid_image {
          width
          url(format: "webp")
          height
          description
          _id
        }
        _id
        _slug
      }
    }
    LandingpageGrids {
      items {
        _id
        landingpage_projects_grid {
          offset
          offset_amount
          _id
          grid_row {
            _slug
            _id
            project_grid_name
            landingpage_grid_image {
              url(format: "webp")
              _type
              description
              width
              height
              cdn_files {
                _id
                _type
                profile
                url
              }
            }
          }
        }
      }
    }
  }
`;
