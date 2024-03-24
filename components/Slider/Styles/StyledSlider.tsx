import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";

export const StyledSlider = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;

export const Slide = styled.div`
  padding-right: ${spaces.xs}px;
  z-index: 1;
`;

export const _Slider = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  touch-action: none;
  z-index: 3;
`;

export const SliderBound = styled.div`
  position: absolute;
  height: 100%;
  z-index: 2;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;
