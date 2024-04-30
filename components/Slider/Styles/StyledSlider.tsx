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
  width: fit-content;
  height: 100%;
  z-index: 1;
`;

export const Slides = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: ${spaces.xs}px;
  --column-gap: ${spaces.xs};
  width: fit-content;
  height: 100%;
`;

export const SliderBound = styled.div`
  position: absolute;
  height: 100%;
  z-index: 2;
  &.left {
    left: 0;
    /* background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0),
      80%,
      rgba(255, 255, 255, 1)
    ); */
  }
  &.right {
    right: 0;
    /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      80%,
      rgba(255, 255, 255, 1)
    ); */
  }
`;
