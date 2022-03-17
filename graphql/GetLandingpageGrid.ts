import { gql } from "@apollo/client";

export const GET_LANDINGPAGE_GRID = gql`
  query getLandingpageGrid {
    LandingpageGrids {
      items {
        _id
        landingpage_project {
          _slug
          project_name
          project_areas {
            ... on Area {
              area_name
              _slug
            }
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
`;
