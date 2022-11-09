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
  @media (max-aspect-ratio: 18/11) {
    min-height: unset;
  }
  ${breakpoint.phone} {
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
      position: static;
      display: grid;
      margin-left: auto;
      grid-auto-columns: 21px;
    }
  }
`;

export const HeroText = styled.div`
  * {
    pointer-events: all;
  }
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: grid;
  grid-row-gap: 30px;
  .perex {
    max-width: 350px;
  }
  ${breakpoint.largeNotebook} {
    .perex {
      max-width: 250px;
    }
  }
  ${breakpoint.tabletPortrait} {
    width: 100%;
    position: static;
    transform: none;
    display: grid;
    row-gap: ${({ theme }) => theme.pageMargin};
    margin-top: ${({ theme }) => u(1, theme.pageMargin)};
    order: 2;
    ${StyledIndex} & {
      order: 3;
    }
  }
  ${breakpoint.phone} {
    width: ${({ theme }) => u(15, theme.pageMargin)};
    grid-template-columns: unset;
    row-gap: ${({ theme }) => theme.pageMargin};
    margin-top: ${({ theme }) => u(2, theme.pageMargin)};
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

export const HeroHeaderContainer = styled.div`
  display: grid;
  row-gap: 30px;
  ${breakpoint.phone} {
    row-gap: 15px;
  }
`;
