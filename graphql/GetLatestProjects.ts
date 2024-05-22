import { gql } from "@apollo/client";

export const GET_LATEST_PROJECTS = gql`
  query latestProjects {
    FeaturedGrid {
      featured_projects {
        _slug
        _id
        project_grid_name
        grid_image {
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
`;
