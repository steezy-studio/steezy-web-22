import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
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
  ${breakpoint.smallNotebook} {
    column-gap: ${spaces.m}px;
  }
  ${breakpoint.tabletLandscape} {
    row-gap: ${spaces.xs}px;
  }
`;

export const Filter = styled.span`
  display: flex;
  column-gap: ${spaces.xxs}px;
  ${breakpoint.phone} {
    span:nth-child(2) {
      display: none;
    }
  }
`;

export const FilterW = styled.span`
  font-size: 40px;
  font-weight: 500;
  ${breakpoint.custom(1700)} {
    font-size: 35px;
  }
  ${breakpoint.custom(1600)} {
    font-size: 30px;
  }
  ${breakpoint.custom(1250)} {
    font-size: 25px;
  }
  ${breakpoint.custom(1080)} {
    font-size: 21px;
  }
  ${breakpoint.custom(900)} {
    font-size: 18px;
  }
`;

export const ProjectsGridW = styled.div`
  margin-bottom: ${spaces.xxxl}px;
`;
