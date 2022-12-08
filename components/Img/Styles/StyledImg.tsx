import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { StyledContact } from "../../../pagestyles/StyledContact";
import {
  ClientQuote,
  NextProjectSection,
  StyledProject,
} from "../../../pagestyles/StyledProject";
import {
  Blockquote,
  Outro,
  ValuesCoverInner,
} from "../../../pagestyles/StyledStudio";
import { StyledGridItem } from "../../GridItem/Styles/StyledGridItem";
import { HeroMedia } from "../../Hero/Styles/StyledHero";
import { StyledImageSlider } from "../../ImageSlider/Styles/StyledImageSlider";
import { ContactUs } from "../../Navbar/Styles/StyledNavbar";

export const StyledImg = styled(motion.div)`
  ${ContactUs} & {
    width: 20px;
  }
  ${StyledGridItem} & {
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  ${StyledProject} & {
    &.client-logo {
      height: 100%;
      max-height: 100px;
      align-self: start;
      width: 100%;
      ${breakpoint.tabletLandscape} {
        justify-self: end;
      }
      ${breakpoint.phone} {
        max-height: 70px;
        width: auto;
        justify-self: start;
      }
    }
  }
  ${HeroMedia} & {
    width: 100%;
    ${breakpoint.phone} {
      position: relative;
      padding-bottom: ${(5 / 4) * 100}%;
      ${StyledContact} & {
        /* FIXME UGLY AF */
        * {
          object-position: right !important;
        }
      }
    }
  }
  ${Blockquote} & {
    ${breakpoint.phone} {
      &._1 {
        grid-area: image;
      }
      &._2 {
        grid-area: image;
      }
    }
  }
  ${StyledImageSlider} & {
    padding-right: 10px;
    ${breakpoint.phone} {
      padding-right: 5px;
    }
  }
  ${ClientQuote} & {
    width: 250px;
    height: 250px;
    border-radius: 9999999999999px;
    overflow: hidden;
    &.phone {
      display: none;
    }
    ${breakpoint.smallNotebook} {
      width: 150px;
      height: 150px;
    }
    ${breakpoint.tabletPortrait} {
      width: 100px;
      height: 100px;
    }
    ${breakpoint.phone} {
      width: 80px;
      height: 80px;
      &.desktop {
        display: none;
      }
      &.phone {
        display: block;
        margin-bottom: 10px;
      }
    }
  }
  ${Outro} & {
    ${breakpoint.phone} {
      position: relative;
      padding-bottom: 100%;
    }
  }
`;
