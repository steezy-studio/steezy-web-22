import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_LANDINGPAGE = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getLandingpage {
    Areas(sort: area_order_ASC) {
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
