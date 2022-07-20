import styled from "styled-components";
import { breakpoint, colors } from "../../consts";
import u from "../../helpers/unit";
import { StyledContact } from "../../pagestyles/StyledContact";
import { ProjectsHeroFilters } from "../../pagestyles/StyledProjects";
import { Quote } from "../../pagestyles/StyledStudio";
import { HeroContent } from "../Hero/Styles/StyledHero";
import { StyledImageSlider } from "../ImageSlider/Styles/StyledImageSlider";

export const Large = styled.h1`
  font-family: "migra-italic", Arial, Helvetica, sans-serif;
  font-size: 110px;
  line-height: 1em;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: ${colors.black};
  position: relative;
  ${breakpoint.largeNotebook} {
    font-size: 90px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${HeroContent} & {
    margin-top: ${({ theme }) => u(0.75, theme.pageMargin)};
    white-space: pre-wrap;
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
      font-size: 50px;
    }
  }
  ${StyledImageSlider} & {
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
    }
    &.offset-x-2 {
      margin-left: ${({ theme }) => u(1, theme.pageMargin, 30)};
      ${breakpoint.helperSmallNotebook} {
        margin-left: 90px;
      }
    }
    ${breakpoint.largeNotebook} {
      font-size: 80px;
    }
    ${breakpoint.helperSmallNotebook} {
      font-size: 60px;
    }
    ${breakpoint.smallNotebook} {
      font-size: 50px;
    }
  }
`;
