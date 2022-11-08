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
        project_tags {
          area_name
          _id
          _slug
        }
      }
    }
  }
`;
