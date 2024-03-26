import { motion } from "framer-motion";
import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import u from "../../helpers/unit";
import { ProjectHeroRole } from "../../pagestyles/StyledProject";
import {
  Blockquote,
  BrandsSection,
  StyledStudio,
  TextBlock,
  ValuesSection,
} from "../../pagestyles/StyledStudio";
import { StyledFooter } from "../Footer/Styles/StyledFooter";
import { GridItemAreas } from "../GridItem/Styles/StyledGridItem";
import { StyledHero } from "../Hero/Styles/StyledHero";
import { PhoneDecoration } from "../Navbar/Styles/StyledNavbar";

export const Micro = styled(motion.span)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  color: ${colors.black};
  text-transform: uppercase;
  display: inline-block;
  max-width: 400px;
  ${breakpoint.phone} {
    font-size: 12px;
  }
  &.dash-margin {
    margin-left: ${({ theme }) => u(1, theme.pageMargin, 30)};
    ${breakpoint.helperSmallNotebook} {
      margin-left: 90px;
    }
    ${breakpoint.smallNotebook} {
      ${ValuesSection} &, 
      ${TextBlock} &,  ${BrandsSection} & {
        margin-left: 0;
      }
    }
    ${breakpoint.tabletLandscape} {
      ${Blockquote} & {
        margin-left: 0;
      }
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
    &.small {
      &:after {
        width: 20px;
      }
    }
    &.inline {
      display: inline-flex;
    }
    ${breakpoint.smallNotebook} {
      ${TextBlock} &, ${BrandsSection} & {
        &:after {
          display: none;
        }
      }
    }
    ${breakpoint.tabletLandscape} {
      ${Blockquote} & ._2 & {
        &.reversed {
          flex-direction: row;
        }
      }
    }
    ${breakpoint.tabletPortrait} {
      ${ValuesSection} & {
        &:after {
          display: none;
        }
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
  ${breakpoint.tabletLandscape} {
    font-size: 11px;
  }
  ${StyledHero} & {
    white-space: pre-wrap;
    &.perex {
      line-height: 1.6em;
    }
    ${StyledStudio} & {
      ${breakpoint.tabletPortrait} {
        display: none;
      }
    }
  }
  ${PhoneDecoration} & {
    white-space: pre-wrap;
    line-height: 1.1em;
  }
  ${ProjectHeroRole} & {
    line-height: 1.5em;
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
  ${addColorClasses()}
`;
