import { Variants, animate, motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";
import Link from "next/link";

export const StyledNavbar = styled.nav`
  position: fixed;
  /* pointer-events: none; */
  z-index: 99999;
  top: ${spaces.m}px;
  right: ${spaces.xxxl}px;
  left: ${spaces.xxxl}px;
  height: 60px;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
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

export const NavLinks = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: ${spaces.xs}px;
  padding: ${spaces.m}px ${spaces.xxxl}px ${spaces.xxxl}px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  ${breakpoint.smallNotebook} {
    padding: ${spaces.m}px ${spaces.xl}px ${spaces.xl}px;
  }
  ${breakpoint.tabletPortrait} {
    padding: ${spaces.m}px ${spaces.l}px ${spaces.l}px;
    align-items: end;
  }
  ${breakpoint.monitor} {
    padding: ${spaces.m}px ${spaces.xxxxxl}px ${spaces.xxxl}px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PhoneDecoration = styled(motion.div)`
  display: none;
  /* ${breakpoint.tabletLandscape} {
    position: absolute;
    bottom: ${spaces.xl}px;
    left: ${spaces.xl}px;
    display: grid;
    column-gap: ${spaces.xs}px;
    grid-template-columns: max-content auto;
  }
  ${breakpoint.tabletPortrait} {
    bottom: ${spaces.l}px;
    left: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    bottom: ${spaces.l}px;
    left: ${spaces.l}px;
  } */
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

export const navLinksVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
};

export const NavlinksMask = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const dividerAnimation = {
  variants: {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
    },
    exit: {
      scaleX: 0,
    },
  } as Variants,
  animate: null,
  duration: 0.7,
};

export const VegaW = styled(motion.div)`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
  ${breakpoint.tabletLandscape} {
    display: none;
  }
`;

export const Vega = styled(Image)`
  display: block;
`;
