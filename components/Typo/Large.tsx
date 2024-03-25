import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import u from "../../helpers/unit";
import { StyledContact } from "../../pagestyles/StyledContact";
import { NextProjectHead } from "../../pagestyles/StyledProject";
import { ProjectsHeroFilters } from "../../pagestyles/StyledProjects";
import { Quote } from "../../pagestyles/StyledStudio";
import { StyledSlider } from "../Slider/Styles/StyledSlider";

export const Large = styled.h1`
  &,
  * {
    font-family: "migra-italic", Arial, Helvetica, sans-serif;
    font-size: 90px;
    line-height: 1.1em;
    letter-spacing: 0.02em;
    font-weight: 400;
    color: ${colors.black};
    position: relative;
    &.underline {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
    }
    &.big {
      font-size: 100px;
    }
    ${breakpoint.largeNotebook} {
      font-size: 80px;
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
    ${NextProjectHead} & {
      &.related-project {
        grid-area: relatedProject;
      }
      &.back-to-projects {
        grid-area: backToProjects;
        justify-self: end;
        ${breakpoint.phone} {
          justify-self: unset;
        }
      }
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
    ${StyledSlider} & {
      margin: 30px ${({ theme }) => theme.pageMargin} 0;
      float: right;
    }
    ${Quote} & {
      font-size: 90px;
      &:before {
        content: "“";
        display: block;
        font-weight: 600;
      }
      margin-bottom: ${({ theme }) => u(0.5, theme.pageMargin)};
      &.offset-x-1 {
        transform: translateX(${({ theme }) => u(-1, theme.pageMargin)});
        ${breakpoint.phone} {
          transform: unset;
        }
      }
      &.offset-x-2 {
        margin-left: ${({ theme }) => u(1, theme.pageMargin, 30)};
        ${breakpoint.helperSmallNotebook} {
          margin-left: 90px;
        }
        ${breakpoint.tabletLandscape} {
          margin-left: 0;
        }
      }
      ${breakpoint.largeNotebook} {
        font-size: 70px;
      }
      ${breakpoint.helperSmallNotebook} {
        font-size: 60px;
      }
      ${breakpoint.smallNotebook} {
        font-size: 50px;
      }
      ${breakpoint.tabletLandscape} {
        font-size: 40px;
      }
      ${breakpoint.tabletPortrait} {
        font-size: 35px;
      }
      ${breakpoint.phone} {
        font-size: 28px;
        margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
      }
    }
    ${addColorClasses()}
  }
`;
