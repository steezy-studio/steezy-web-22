import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import { StyledContact } from "../../pagestyles/StyledContact";
import { ProjectsHeroFilters } from "../../pagestyles/StyledProjects";

export const Large = styled.h1`
  font-family: "migra-italic", Arial, Helvetica, sans-serif;
  font-size: 60px;
  line-height: 1.1em;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: ${colors.black};
  max-width: 900px;
  &.underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
  &.smaller {
    font-size: 40px;
  }
  &.big {
    font-size: 100px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 50px;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 50px;
  }
  ${breakpoint.phone} {
    font-size: 40px;
  }
  ${StyledContact} & {
    line-height: 1.2em;
  }
  ${ProjectsHeroFilters} & {
    text-transform: lowercase;
    font-size: 70px;
    padding: 0.05em 0;
    ${breakpoint.largeNotebook} {
      font-size: 60px;
    }
    ${breakpoint.smallNotebook} {
      font-size: 40px;
    }
    ${breakpoint.phone} {
      font-size: 30px;
      padding: 0.1em 0;
    }
  }
  ${addColorClasses()}
`;
