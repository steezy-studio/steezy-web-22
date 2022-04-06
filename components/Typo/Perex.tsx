import styled from "styled-components";
import u from "../../helpers/unit";
import {
  ProjectsGridColumn,
  ProjectsHeroContent,
} from "../../pagestyles/StyledProjects";

export const Perex = styled.p`
  font-size: 34px;
  font-weight: 300;
  line-height: 1.2em;
  ${ProjectsGridColumn} & {
    width: ${({ theme }) => u(5, theme.pageMargin)};
    margin-bottom: ${({ theme }) => u(2, theme.pageMargin)};
  }
  ${ProjectsHeroContent} & {
    max-width: ${({ theme }) => u(5, theme.pageMargin)};
  }
`;
