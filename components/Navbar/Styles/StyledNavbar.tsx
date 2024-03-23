import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledNavbar = styled.nav<{ hasSmoothScroll: boolean }>`
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  top: calc(-100vh + ${spaces.m}px);
  right: 0;
  left: 0;
  height: ${({ theme }) => theme.navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ hasSmoothScroll }) =>
    !hasSmoothScroll &&
    css`
      top: ${({ theme }) => theme.pageMargin};
      left: ${({ theme }) => theme.pageMargin};
      right: ${({ theme }) => theme.pageMargin};
    `};
  ${breakpoint.phone} {
    top: ${({ theme }) => theme.pageMargin};
    left: ${({ theme }) => theme.pageMargin};
    right: ${({ theme }) => theme.pageMargin};
  }
`;

export const NavLinks = styled(motion.div)<{ $hasSmoothScroll: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${breakpoint.tabletLandscape} {
    padding: ${({ theme }) => theme.pageMargin};
    position: fixed;
    top: ${({ theme }) => "-" + theme.pageMargin};
    left: ${({ theme }) => "-" + theme.pageMargin};
    right: ${({ theme }) => "-" + theme.pageMargin};
    bottom: ${({ theme }) => "-" + theme.pageMargin};
    ${({ $hasSmoothScroll }) =>
      !$hasSmoothScroll &&
      css`
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `};
    width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    background-color: ${colors.primary300};
  }
  ${breakpoint.phone} {
    inset: 0;
  }
`;

export const PhoneDecoration = styled(motion.div)`
  display: none;
  ${breakpoint.tabletLandscape} {
    position: absolute;
    left: ${({ theme }) => theme.pageMargin};
    bottom: ${({ theme }) => theme.pageMargin};
    right: ${({ theme }) => theme.pageMargin};
    display: grid;
    grid-template-columns: max-content auto;
  }
`;

export const ContactUs = styled.a`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 10px;
`;

export const NavHeader = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    max-width: 500px;
    text-align: center;
  }
`;

export const LinksBlock = styled(motion.div)`
  border-radius: 999px;
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${colors.black};
  background-color: ${colors.white};
  flex-shrink: 0;
  &.stretch {
    flex-shrink: 1;
    width: 100%;
  }
`;

export const linksBlockVariants = {
  initial: {
    y: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

export const NavlinksMask = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
