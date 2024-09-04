import { gql } from "@apollo/client";
import { GET_PROJECTS as GET_PROJECTS_FRAGMENT } from "./fragments/fragmentGetProjects";

export const GET_SIMILAR_PROJECTS = gql`
  ${GET_PROJECTS_FRAGMENT}
  query getSimilarProjects(
    $limit: Int
    $skip: Int
    $where: ProjectWhereInput
    $id: String!
  ) {
    Similar_Projects(where: $where, limit: $limit, skip: $skip, id: $id) {
      ...FragmentGetProjects
    }
  }
`;
