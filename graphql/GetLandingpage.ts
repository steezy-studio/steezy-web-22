import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_LANDINGPAGE = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getLandingpage {
    Areas {
      ...FragmentGetAreas
    }
    LandingpageGrids {
      items {
        _id
        landingpage_projects_grid {
          offset
          _id
          grid_row {
            _slug
            _id
            project_grid_name
            project_tags {
              area_name
              _slug
            }
            landingpage_grid_image {
              url(format: "webp")
              description
              width
              height
            }
          }
        }
      }
    }
  }
`;
