import styled from "styled-components";
import { breakpoint, colors } from "../../consts";
import u from "../../helpers/unit";
import { LandingpageHeroClients } from "../../pagestyles/StyledIndex";
import { ProjectHeroRole } from "../../pagestyles/StyledProject";
import {
  BrandsSection,
  Quote,
  ServicesSection,
  TextBlock,
} from "../../pagestyles/StyledStudio";
import { DetailedContact, StyledFooter } from "../Footer/Styles/StyledFooter";
import { GridItemAreas } from "../GridItem/Styles/StyledGridItem";
import { StyledHero } from "../Hero/Styles/StyledHero";

export const Micro = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  color: ${colors.black};
  text-transform: uppercase;
  display: inline-block;
  &.dash-margin {
    margin-left: ${({ theme }) => u(1, theme.pageMargin, 30)};
    ${breakpoint.helperSmallNotebook} {
      margin-left: 90px;
    }
  }
  &.with-dash {
    display: flex;
    align-items: center;
    &:after {
      content: "";
      display: block;
      margin-left: 30px;
      height: 1px;
      width: ${({ theme }) => u(1, theme.pageMargin)};
      background-color: ${colors.black};
      ${breakpoint.helperSmallNotebook} {
        width: 60px;
        margin-left: 20px;
      }
    }
    &.reversed {
      flex-direction: row-reverse;
      justify-content: flex-end;
      &:after {
        margin-left: 0;
        margin-right: 30px;
      }
    }
  }
  &.lowcase {
    text-transform: none;
    letter-spacing: 0.04em;
    line-height: 1.8em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 12px;
  }
  ${StyledHero} & {
    white-space: pre-wrap;
    &.perex {
      padding-top: ${({ theme }) => u(0.5, theme.pageMargin)};
      line-height: 1.6em;
      max-width: 300px;
    }
    &.sub-header {
      width: 400px;
    }
    &.fill {
      background-color: ${colors.primary300};
      padding: 10px;
      text-align: center;
      /* border: 1px solid ${colors.black}; */
    }
  }
  ${LandingpageHeroClients} & {
    text-align: right;
  }
  ${ProjectHeroRole} & {
    ${breakpoint.smallNotebook} {
      line-height: 1.5em;
    }
  }
  ${GridItemAreas} & {
    letter-spacing: 0.02em;
    &:not(:last-child) {
      &:after {
        content: "\u2002\u2022\u2002";
      }
    }
  }
  ${StyledFooter} & {
    display: block;
    white-space: pre-wrap;
  }
  ${ServicesSection} &, ${BrandsSection} &, ${TextBlock} & {
    margin-top: 1.5em;
  }
`;
