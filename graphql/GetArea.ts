import { gql } from "@apollo/client";

export const GET_AREA = gql`
  query GetArea($slug: String!) {
    Area(slug: $slug) {
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
  }
`;
