import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import {
  ClientQuote,
  NextProjectSection,
  ProjectHeroFooter,
} from "../../../pagestyles/StyledProject";
import {
  Blockquote,
  Outro,
  ValuesCoverInner,
} from "../../../pagestyles/StyledStudio";
import { StyledGridItem } from "../../GridItem/Styles/StyledGridItem";
import { HeroMedia } from "../../Hero/Styles/StyledHero";
import { StyledImageSlider } from "../../ImageSlider/Styles/StyledImageSlider";

export const StyledImg = styled(motion.div)`
  ${StyledGridItem} & {
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
    ${NextProjectSection} & {
      max-height: 800px;
      ${breakpoint.monitor} {
        max-height: 70vh;
      }
    }
  }
  ${ProjectHeroFooter} & {
    height: auto;
    min-width: 50px;
    max-width: 80px;
    align-self: start;
    ${breakpoint.tabletLandscape} {
      justify-self: end;
    }
    ${breakpoint.phone} {
      min-width: 80px;
      max-width: 100px;
      justify-self: start;
    }
  }
  ${HeroMedia} & {
    width: 100%;
    ${breakpoint.phone} {
      position: relative;
      padding-bottom: ${(5 / 4) * 100}%;
    }
  }
  ${Blockquote} & {
    ${breakpoint.phone} {
      &._2 {
        grid-area: "image";
      }
    }
  }
  ${StyledImageSlider} & {
    padding-right: 10px;
  }
  ${ClientQuote} & {
    width: 250px;
    height: 250px;
    ${breakpoint.smallNotebook} {
      width: 150px;
      height: 150px;
    }
    ${breakpoint.tabletPortrait} {
      width: 100px;
      height: 100px;
    }
  }
  ${Outro} & {
    ${breakpoint.phone} {
      position: relative;
      padding-bottom: 100%;
    }
  }
  ${ValuesCoverInner} & {
    max-height: ${({ theme }) =>
      `calc(100vh - (4 * ${theme.pageMargin}) - (2 * ${theme.navbarHeight}))`};
    overflow: hidden;
    ${breakpoint.phone} {
      max-height: unset;
    }
  }
`;
