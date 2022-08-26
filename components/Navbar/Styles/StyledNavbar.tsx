import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledNavbar = styled.nav`
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  top: ${({ theme }) => `calc(-100vh + ${theme.pageMargin})`};
  width: ${({ theme }) => u(16, theme.pageMargin)};
  height: ${({ theme }) => theme.navbarHeight};
  display: flex;
  ${breakpoint.phone} {
    top: ${({ theme }) => theme.pageMargin};
  }
`;

export const NavLinks = styled(motion.div)`
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
    position: fixed;
    top: ${({ theme }) => "-" + theme.pageMargin};
    left: ${({ theme }) => "-" + theme.pageMargin};
    right: ${({ theme }) => "-" + theme.pageMargin};
    bottom: ${({ theme }) => "-" + theme.pageMargin};
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: flex-end;
    padding: ${({ theme }) => theme.pageMargin};
    width: auto;
    background-color: ${colors.primary300};
  }
`;

export const PhoneDecoration = styled(motion.div)`
  display: none;
  ${breakpoint.tabletLandscape} {
    position: absolute;
    bottom: ${({ theme }) => theme.pageMargin};
    left: ${({ theme }) => theme.pageMargin};
    right: ${({ theme }) => theme.pageMargin};
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactUs = styled.a`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 10px;
  align-items: center;
`;
