import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import { StyledContact } from "../../pagestyles/StyledContact";
import { ProjectsHeroFilters } from "../../pagestyles/StyledProjects";

export const Large = styled.h1`
  font-family: "editorial-new", "Times New Roman", Times, serif;
  font-size: 60px;
  line-height: 1.1em;
  letter-spacing: -0.01em;
  font-weight: 400;
  color: ${colors.black};
  max-width: 900px;
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 50px;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 40px;
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
