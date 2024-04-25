"use client";

import { ResolvedValues, Variants, delay } from "framer-motion";
import { DividerLine, StyledDivider } from "./StyledDivider";
import { easing } from "../../helpers/animationConfig";
import { ColorKeys } from "../../helpers/consts";

interface DividerProps {
  fill?: ColorKeys;
  animate?: boolean | "inView" | "animatePresence";
  duration?: number;
  once?: boolean;
  onAnimationEnded?: (arg: ResolvedValues) => void;
  reverse?: boolean;
  variants?: Variants;
  delay?: number;
}

const Divider = ({
  fill = "black",
  animate = "inView",
  duration = 3,
  once = true,
  reverse,
  variants,
  onAnimationEnded = () => {},
  delay = 0,
}: DividerProps) => {
  return (
    <StyledDivider>
      <DividerLine
        initial={variants ? "initial" : "hidden"}
        animate={
          variants
            ? "animate"
            : animate !== "inView" && animate
            ? "visible"
            : "hidden"
        }
        exit={variants ? "exit" : undefined}
        className={reverse ? "reverse" : ""}
        color={fill}
        whileInView={animate === "inView" || !variants ? "visible" : undefined}
        viewport={variants ? { once } : undefined}
        variants={
          variants
            ? variants
            : { hidden: { scaleX: 0 }, visible: { scaleX: 1 } }
        }
        transition={{ ease: easing, duration: duration * delay }}
        onUpdate={(arg) => {
          onAnimationEnded(arg);
        }}
      />
    </StyledDivider>
  );
};

export default Divider;
