import { Variants, animate, motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";

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
`;

export const LinksBlock = styled(motion.div)`
  border-radius: 999px;
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  flex-shrink: 0;
  padding: 0 ${spaces.s}px;
  &.stretch {
    flex-shrink: 1;
    width: 100%;
  }
  ${breakpoint.tabletLandscape} {
    display: grid;
    height: auto;
    justify-content: end;
    justify-items: end;
    width: 100%;
    border: unset;
    background-color: unset;
    border: 1px solid ${colors.black};
    width: fit-content;
    padding: 0 ${spaces.m}px;
    transform: translateX(${spaces.m}px);
    &.stretch {
      border: 0px solid ${colors.black};
    }
    &.active {
      background-color: ${colors.primary400};
    }
  }
  ${breakpoint.phone} {
    padding: 0 ${spaces.s}px;
  }
`;

export const PhoneDecoration = styled(motion.div)`
  display: none;
  ${breakpoint.tabletLandscape} {
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
  }
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

export const linksBlockVariants = {
  initial: {
    backdropFilter: "blur(0px)",
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
  animate: {
    backdropFilter: "blur(250px)",
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    backdropFilter: "blur(0px)",
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
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

export const Vega = styled(Image)`
  display: block;
`;
