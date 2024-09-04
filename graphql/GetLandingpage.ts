import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_LANDINGPAGE = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getLandingpage($sortLatestProjects: ProjectSortInput) {
    Areas(sort: area_order_ASC) {
      ...FragmentGetAreas
    }
    Area(slug: "all-projects") {
      area_name
      _slug
      sub_areas
      area_description
      projects {
        _id
        _slug
        grid_image_portrait: grid_image {
          _type
          url(format: "webp", preset: "9:16")
          width
          height
          description
          cdn_files {
            url
          }
        }
        grid_image {
          _type
          url(format: "webp", preset: "16:9")
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
    Projects(sort: $sortLatestProjects, limit: 14) {
      items {
        project_grid_name
        grid_image_portrait: grid_image {
          width
          url(format: "webp", preset: "9:16")
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
        grid_image {
          width
          url(format: "webp", preset: "16:9")
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
