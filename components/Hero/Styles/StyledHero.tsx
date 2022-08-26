import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";
import { StyledContact } from "../../../pagestyles/StyledContact";
import { StyledIndex } from "../../../pagestyles/StyledIndex";
import { PhoneDecoration } from "../../Navbar/Styles/StyledNavbar";

export const StyledHero = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.pageMargin} 0;
  position: relative;
  display: flex;
  flex-direction: column;
  ${breakpoint.tabletLandscape} {
    min-height: unset;
  }
  ${breakpoint.tabletPortrait} {
    min-height: unset;
  }
  ${breakpoint.phone} {
    min-height: 100vh;
    padding-top: 70px;
  }
`;

export const HeroSocials = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 25px;
  position: fixed;
  top: ${({ theme }) => `calc(-1 * ${theme.pageMargin} - 24px)`};
  z-index: 99;
  ${breakpoint.largeNotebook} {
    grid-gap: 15px;
  }
  ${breakpoint.tabletLandscape} {
    display: none;
    ${PhoneDecoration} & {
      display: grid;
      position: static;
    }
  }
`;

export const HeroText = styled(motion.div)`
  * {
    pointer-events: all;
  }
  width: ${({ theme }) => u(6, theme.pageMargin)};
  position: absolute;
  top: 30vh;
  z-index: 1;
  display: grid;
  grid-row-gap: 30px;
  .perex {
    max-width: 250px;
  }
  ${StyledContact} & {
    width: ${({ theme }) => u(10, theme.pageMargin)};
  }
  ${breakpoint.largeNotebook} {
    width: ${({ theme }) => u(7, theme.pageMargin)};
  }
  ${breakpoint.smallNotebook} {
    width: ${({ theme }) => u(5, theme.pageMargin)};
  }
  ${breakpoint.tabletLandscape} {
    top: 25vh;
  }
  ${breakpoint.tabletPortrait} {
    width: ${({ theme }) => u(8, theme.pageMargin)};
    position: static;
    transform: unset;
    margin-top: ${({ theme }) => u(1, theme.pageMargin)};
    order: 2;
    ${StyledIndex} & {
      order: 3;
    }
  }
  ${breakpoint.phone} {
    width: ${({ theme }) => u(15, theme.pageMargin)};
  }
  ${StyledContact} & {
    top: 40vh;
  }
`;

export const HeroMedia = styled(motion.div)`
  width: ${({ theme }) => u(13, theme.pageMargin)};
  margin-left: auto;
  ${breakpoint.tabletPortrait} {
    width: ${({ theme }) => u(16, theme.pageMargin)};
    margin-left: unset;
    order: 1;
  }
  ${breakpoint.phone} {
  }
`;

export const HeroFooterChildren = styled(motion.div)`
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  width: 100%;
  ${breakpoint.tabletPortrait} {
    order: 3;
    ${StyledIndex} & {
      order: 2;
    }
  }
`;
