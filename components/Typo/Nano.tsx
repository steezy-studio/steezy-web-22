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

export const Nano = styled(motion.span)`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  color: ${colors.black};
  text-transform: uppercase;
  display: inline-block;
  &.no-underline {
    text-decoration: none;
  }
  &.inline {
    display: inline-flex;
  }
  &.lowcase {
    text-transform: none;
    letter-spacing: 0.04em;
    line-height: 1.8em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 11px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 11px;
  }
  ${breakpoint.phone} {
    font-size: 12px;
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
  }
  ${StyledFooter} & {
    display: block;
    white-space: pre-wrap;
  }
  ${addColorClasses()}
`;
