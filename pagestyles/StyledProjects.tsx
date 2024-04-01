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
  flex-wrap: wrap;
  row-gap: ${spaces.s}px;
  column-gap: ${spaces.s}px;
  justify-content: space-between;
`;

export const Filter = styled.span`
  display: flex;
  column-gap: ${spaces.xxs}px;
`;
