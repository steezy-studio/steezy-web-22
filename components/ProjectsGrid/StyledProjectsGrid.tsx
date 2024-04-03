import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import { breakpoint } from "../../helpers/consts";

export const StyledProjectsGrid = styled.div``;

export const LoadMoreProjects = styled.div`
  margin-top: ${spaces.xl}px;
`;

export const ProjectsGridRows = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const GridRow = styled.div`
  display: grid;
  column-gap: ${spaces.xs}px;
  grid-template-columns: ${3.16}fr ${1}fr;
  &:nth-child(2n) {
    grid-template-columns: ${1}fr ${3.16}fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: ${spaces.xs}px;
    &:nth-child(2n) {
      grid-template-columns: unset;
    }
  }
`;
