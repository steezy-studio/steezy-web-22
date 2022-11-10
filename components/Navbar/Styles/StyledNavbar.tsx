import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledNavbar = styled.nav<{ hasSmoothScroll: boolean }>`
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  top: ${({ theme }) => `calc(-100vh + ${theme.pageMargin})`};
  right: 0;
  left: 0;
  height: ${({ theme }) => theme.navbarHeight};
  display: flex;
  ${({ hasSmoothScroll }) =>
    !hasSmoothScroll &&
    css`
      top: ${({ theme }) => theme.pageMargin};
      left: ${({ theme }) => theme.pageMargin};
      right: ${({ theme }) => theme.pageMargin};
    `};
  ${breakpoint.phone} {
    top: ${({ theme }) => theme.pageMargin};
  }
`;

export const NavLinks = styled(motion.div)<{ $hasSmoothScroll: boolean }>`
  background-color: ${colors.black};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.largeNotebook} {
    padding-right: 0;
    justify-content: center;
  }
  ${breakpoint.helperLargeNotebook} {
    padding-right: ${({ theme }) => u(1, theme.pageMargin)};
    justify-content: flex-end;
  }
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
    position: fixed;
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
  column-gap: 10px;
`;
