import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledImageSlider = styled(motion.div)`
  margin: 0 ${({ theme }) => `calc(-1 * ${theme.pageMargin})`};
  overflow: hidden;
  position: relative;
`;

export const ImageSlide = styled.div``;

export const Slider = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  touch-action: none;
`;
