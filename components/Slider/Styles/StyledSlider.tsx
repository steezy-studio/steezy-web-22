import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";

export const StyledSlider = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const _Slider = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: ${spaces.xs}px;
  --column-gap: ${spaces.xs};
  height: 100%;
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
