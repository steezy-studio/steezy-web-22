import styled from "styled-components";
import { breakpoint } from "../../consts";
import u from "../../helpers/unit";
import { ClientQuote } from "../../pagestyles/StyledProject";
import {
  ProjectsGridColumn,
  ProjectsHeroContent,
} from "../../pagestyles/StyledProjects";
import { BrandsText, SubServicesList } from "../../pagestyles/StyledStudio";

export const Medium = styled.p`
  font-size: 30px;
  font-weight: 300;
  line-height: 1.2em;
  &.big {
    font-family: "agrandir";
    font-weight: 500;
    font-size: 35px;
  }
  ${breakpoint.largeNotebook} {
    font-size: 24px;
    &.big {
      font-size: 30px;
    }
  }
  ${breakpoint.smallNotebook} {
    font-size: 21px;
    &.big {
      font-size: 26px;
    }
  }
  ${ProjectsGridColumn} & {
    width: ${({ theme }) => u(5, theme.pageMargin)};
    margin-bottom: ${({ theme }) => u(2, theme.pageMargin)};
  }
  ${ProjectsHeroContent} & {
    width: ${({ theme }) => u(4, theme.pageMargin)};
    ${breakpoint.tabletLandscape} {
      width: ${({ theme }) => u(6, theme.pageMargin)};
    }
  }
  ${ClientQuote} & {
    margin-bottom: 60px;
    font-size: 48px;
    line-height: 1.3em;
    letter-spacing: 0.03em;
    font-family: "migra-italic";
    ${breakpoint.largeNotebook} {
      font-size: 36px;
    }
    ${breakpoint.smallNotebook} {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
  ${SubServicesList} & {
    white-space: pre-wrap;
    line-height: 1.5em;
  }
`;
