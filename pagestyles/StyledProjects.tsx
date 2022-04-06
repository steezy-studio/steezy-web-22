import styled from "styled-components";
import u from "../helpers/unit";

export const StyledProjects = styled.div``;

export const ProjectsHero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pageMargin} 0;
`;
export const ProjectsHeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  margin: auto 0;
  // optical correction
  transform: translateY(5%);
`;

export const ProjectsHeroFilters = styled.div``;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${({ theme }) => theme.pageMargin};
  row-gap: ${({ theme }) => u(1, theme.pageMargin)};
`;

export const ProjectsGridColumn = styled.div`
  &.odd {
    /* transform: translateY(${({ theme }) => u(-4, theme.pageMargin)}); */
    margin-top: ${({ theme }) => u(-4, theme.pageMargin)};
  }
`;

export const ProjectsGridItem = styled.div`
  margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
`;
