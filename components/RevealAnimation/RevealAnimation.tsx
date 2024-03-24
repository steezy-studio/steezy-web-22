"use client";

import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { easing } from "../../helpers/animationConfig";
import {
  RevealAnimationInner,
  StyledRevealAnimation,
} from "./Styles/StyledRevealAnimation";

interface TextAnimationProps {
  children: ReactNode;
  delay?: number;
  noSkew?: boolean;
  noCrop?: boolean;
  duration?: number;
  disable?: boolean;
  y?: (number | string)[];
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
  margin?: string;
  once?: boolean;
}

const RevealAnimation = ({
  children,
  delay = 0,
  noSkew = true,
  duration = 1.2,
  noCrop = false,
  disable,
  y,
  as,
  style,
  margin,
  once = true,
}: TextAnimationProps) => {
  return disable ? (
    <StyledRevealAnimation as={as} style={style}>
      {children}
    </StyledRevealAnimation>
  ) : (
    <StyledRevealAnimation
      style={{ overflow: noCrop ? "unset" : "hidden", ...style }}
      as={as}
    >
      <RevealAnimationInner
        initial={{
          y: y ? y[0] : "70%",
          skew: noSkew ? 0 : 20,
          opacity: 0,
        }}
        whileInView={{
          y: y ? y[1] : "0%",
          skew: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.5 * delay, ease: easing, duration: duration }}
        viewport={{
          once: once,
          margin: margin ? margin : "0% 0%",
        }}
      >
        {children}
      </RevealAnimationInner>
    </StyledRevealAnimation>
  );
};

export default RevealAnimation;
