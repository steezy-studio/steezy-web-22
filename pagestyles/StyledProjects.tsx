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
  ${breakpoint.tabletLandscape} {
    column-gap: ${spaces.m}px;
    row-gap: ${spaces.xxs}px;
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
  font-size: 30px;
  font-weight: 500;
  ${breakpoint.custom(1650)} {
    font-size: 24px;
  }
  ${breakpoint.custom(1300)} {
    font-size: 21px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 18px;
  }
`;

export const ProjectsGridW = styled.div`
  margin-bottom: ${spaces.xxxl}px;
`;
