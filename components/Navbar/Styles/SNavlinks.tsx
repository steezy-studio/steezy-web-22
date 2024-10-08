"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const SNavLinks = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 0;
  padding: ${spaces.m}px ${spaces.xxxl}px ${spaces.xxxl}px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  ${breakpoint.smallNotebook} {
    padding: ${spaces.m}px ${spaces.xl}px ${spaces.xl}px;
  }
  ${breakpoint.tabletPortrait} {
    padding: ${spaces.m}px ${spaces.l}px ${spaces.l}px;
  }
  ${breakpoint.monitor} {
    padding: ${spaces.m}px ${spaces.xxxxxl}px ${spaces.xxxl}px;
  }
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

export const navLinksVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
