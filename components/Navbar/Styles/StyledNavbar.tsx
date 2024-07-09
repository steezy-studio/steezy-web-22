import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 9;
  top: ${spaces.m}px;
  right: ${spaces.xxxl}px;
  left: ${spaces.xxxl}px;
  height: 60px;
  display: flex;
  ${breakpoint.monitor} {
    right: ${spaces.xxxxxl}px;
    left: ${spaces.xxxxxl}px;
  }
  ${breakpoint.smallNotebook} {
    height: 50px;
    right: ${spaces.xl}px;
    left: ${spaces.xl}px;
  }
  ${breakpoint.tabletPortrait} {
    height: 40px;
    right: ${spaces.l}px;
    left: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    right: ${spaces.m}px;
    left: ${spaces.m}px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavbarCart = styled.div`
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${colors.black};
  background-color: ${colors.black};
  &:hover {
    background-color: ${colors.white};
    > * {
      color: ${colors.black} !important;
    }
  }
`;

export const ContactUs = styled(Link)`
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

export const NavlinksMask = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
