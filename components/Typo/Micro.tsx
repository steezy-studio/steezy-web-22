import { motion } from "framer-motion";
import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import { ProjectHeroRole } from "../../pagestyles/StyledProject";
import { StyledStudio } from "../../pagestyles/StyledStudio";
import { StyledFooter } from "../Footer/Styles/StyledFooter";
import { GridItemAreas } from "../GridItem/Styles/StyledGridItem";
import { StyledHero } from "../Hero/Styles/StyledHero";
import { PhoneDecoration } from "../Navbar/Styles/SNavlinks";

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
