import { gql } from "@apollo/client";
import { GET_PROJECTS as GET_PROJECTS_FRAGMENT } from "./fragments/fragmentGetProjects";

export const GET_PROJECTS = gql`
  ${GET_PROJECTS_FRAGMENT}
  query getProjects($limit: Int, $skip: Int, $where: ProjectWhereInput) {
    Projects(where: $where, limit: $limit, skip: $skip) {
      ...FragmentGetProjects
    }
  }
`;
