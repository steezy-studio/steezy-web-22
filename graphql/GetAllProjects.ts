import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_ALL_PROJECTS = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getAllProjects($where: ProjectWhereInput) {
    Areas {
      ...FragmentGetAreas
    }
    Projects(where: $where, limit: null) {
      items {
        _id
        _slug
        grid_image {
          url(format: "webp")
          width
          height
          description
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
