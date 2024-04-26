import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import u from "../helpers/unit";
import { spaces } from "../helpers/spaces";

export const StyledProjects = styled.div``;

export const ProjectsHero = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spaces.xl}px;
  margin-bottom: ${spaces.l}px;
`;

export const ProjectsHeroFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${spaces.s}px;
  column-gap: ${spaces.l}px;
  /* justify-content: space-between; */
`;

export const Filter = styled.span`
  display: flex;
  column-gap: ${spaces.xxs}px;
`;

export const FilterW = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
