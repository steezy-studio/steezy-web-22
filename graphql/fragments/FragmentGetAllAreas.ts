import { gql } from "@apollo/client";

export const FRAGMENT_GET_ALL_AREAS = gql`
  fragment FragmentGetAreas on Areas {
    items {
      area_name
      _id
      _slug
      sub_areas
      area_description
      is_default
      projects {
        _id
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
      }
    }
  }
`;
