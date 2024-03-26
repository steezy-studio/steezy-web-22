import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import u from "../helpers/unit";
import { spaces } from "../helpers/spaces";

export const StyledProjects = styled.div``;

export const ProjectsHero = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spaces.xxxl}px;
  margin-bottom: ${spaces.l}px;
`;

export const ProjectsHeroFilters = styled.div`
  display: flex;
  column-gap: ${spaces.l}px;
`;

export const Filter = styled.span`
  display: flex;
  column-gap: ${spaces.xxs}px;
`;

export const ProjectsGridColumn = styled.div`
  &.odd {
    margin-top: ${({ theme }) => u(-2, theme.pageMargin)};
    ${breakpoint.largeNotebook} {
      margin-top: ${({ theme }) => u(-3, theme.pageMargin)};
    }
    ${breakpoint.smallNotebook} {
      margin-top: ${({ theme }) => u(-2, theme.pageMargin)};
    }
  }
`;

export const ProjectsGridItem = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
    ${breakpoint.phone} {
      margin-bottom: ${({ theme }) => u(2, theme.pageMargin)};
    }
  }
`;
