import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";
import { GET_PROJECTS } from "./fragments/fragmentGetProjects";

export const GET_ALL_PROJECTS = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  ${GET_PROJECTS}
  query getAllProjects($limit: Int, $where: ProjectWhereInput) {
    Areas {
      ...FragmentGetAreas
    }
    Projects(where: $where, limit: $limit) {
      ...FragmentGetProjects
      total
    }
  }
`;
