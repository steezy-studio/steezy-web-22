import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import u from "../../helpers/unit";
import { ClientQuote } from "../../pagestyles/StyledProject";
import {
  ProjectsGridColumn,
  ProjectsHeroContent,
} from "../../pagestyles/StyledProjects";
import { SubServicesList } from "../../pagestyles/StyledStudio";

export const Medium = styled.p`
  font-size: 30px;
  font-weight: 300;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  max-width: 600px;
  &.big {
    font-family: "agrandir";
    font-weight: 500;
    font-size: 35px;
    max-width: 650px;
  }
  ${breakpoint.largeNotebook} {
    font-size: 24px;
    max-width: 550px;
    &.big {
      font-size: 30px;
      max-width: 600px;
    }
  }
  ${breakpoint.smallNotebook} {
    font-size: 21px;
    max-width: 500px;
    &.big {
      font-size: 26px;
      max-width: 550px;
    }
  }
  ${breakpoint.tabletLandscape} {
    font-size: 18px;
    max-width: 450px;
    &.big {
      font-size: 21px;
      max-width: 500px;
    }
  }
  ${breakpoint.phone} {
    font-size: 18px;
    max-width: 400px;
    &.big {
      font-size: 18px;
      max-width: 450px;
    }
  }
  ${breakpoint.monitor} {
    max-width: 800px;
    &.big {
      max-width: 800px;
    }
  }
  ${ProjectsGridColumn} & {
    margin-bottom: ${({ theme }) => u(2, theme.pageMargin)};
  }
  ${ProjectsHeroContent} & {
    ${breakpoint.phone} {
      visibility: hidden;
      position: absolute;
    }
  }
  ${ClientQuote} & {
    margin-bottom: 60px;
    font-size: 48px;
    line-height: 1.3em;
    letter-spacing: 0.03em;
    font-family: "migra-italic";
    font-weight: 300;
    ${breakpoint.largeNotebook} {
      font-size: 36px;
    }
    ${breakpoint.smallNotebook} {
      font-size: 28px;
      margin-bottom: 30px;
    }
    ${breakpoint.tabletPortrait} {
      font-size: 21px;
    }
  }
  ${SubServicesList} & {
    white-space: pre-wrap;
    line-height: 1.5em;
  }
`;
