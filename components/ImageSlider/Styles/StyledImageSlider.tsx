import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledImageSlider = styled(motion.div)`
  margin: 0 ${({ theme }) => `calc(-1 * ${theme.pageMargin})`};
  overflow: hidden;
  position: relative;
`;

export const SliderInner = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({ theme }) => u(8 - 15 / 16, theme.pageMargin)};
  ${breakpoint.phone} {
  }
`;

export const ImageSlide = styled(motion.div)`
  width: ${({ theme }) => u(8 - 15 / 16, theme.pageMargin)};
`;

export const Slider = styled(motion.div)`
  /* width: fit-content; */
`;
