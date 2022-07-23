import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledNavbar = styled.nav`
  position: fixed;
  pointer-events: none;
  z-index: 99;
  top: ${({ theme }) => theme.pageMargin};
  left: ${({ theme }) => theme.pageMargin};
  /* right: ${({ theme }) => theme.pageMargin}; */
  width: ${({ theme }) => u(16, theme.pageMargin)};
  height: 80px;
  display: flex;
  ${breakpoint.largeNotebook} {
    height: 70px;
  }
  ${breakpoint.smallNotebook} {
    height: 60px;
  }
  ${breakpoint.tabletLandscape} {
    height: 50px;
  }
  ${breakpoint.phone} {
    height: 40px;
  }
`;

export const NavLinks = styled(motion.div)`
  background-color: ${colors.black};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 60px;
  ${breakpoint.largeNotebook} {
    padding-right: 0;
    justify-content: center;
  }
  ${breakpoint.helperLargeNotebook} {
    padding-right: 30px;
    justify-content: flex-end;
  }
  ${breakpoint.tabletLandscape} {
    position: fixed;
    top: ${({ theme }) => `calc((${theme.pageMargin} * 2) + 60px)`};
    right: ${({ theme }) => theme.pageMargin};
    left: ${({ theme }) => theme.pageMargin};
    bottom: ${({ theme }) => theme.pageMargin};
    flex-direction: column;
    align-items: flex-end;
    padding: ${({ theme }) => theme.pageMargin};
    width: auto;
    background-color: ${colors.primary300};
    border: 1px solid ${colors.black};
    /* margin: -1px; */
  }
`;
