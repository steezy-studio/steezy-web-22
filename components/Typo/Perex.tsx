import styled from "styled-components";
import u from "../../helpers/unit";
import { StyledContact } from "../../pagestyles/StyledContact";
import {
  ProjectsGridColumn,
  ProjectsHeroContent,
} from "../../pagestyles/StyledProjects";
import { TextBlock } from "../../pagestyles/StyledStudio";

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
  &.big-lh {
    line-height: 1.5em;
  }
  &.big {
    font-weight: 400;
    font-size: 44px;
    line-height: 1.3em;
    max-width: 700px;
    /* padding-left: 40px; */
  }
`;
