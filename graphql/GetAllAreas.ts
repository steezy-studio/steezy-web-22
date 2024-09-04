import { gql } from "@apollo/client";
import { FRAGMENT_GET_ALL_AREAS } from "./fragments/FragmentGetAllAreas";

export const GET_ALL_AREAS = gql`
  ${FRAGMENT_GET_ALL_AREAS}
  query getAllAreas($where: AreaWhereInput) {
    Areas(sort: area_order_ASC, where: $where) {
      ...FragmentGetAreas
    }
  }
`;
