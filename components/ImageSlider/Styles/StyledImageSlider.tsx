import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledImageSlider = styled(motion.div)`
  margin: 0 ${({ theme }) => `calc(-1 * ${theme.pageMargin})`};
  max-width: 100vw;
  overflow: hidden;
`;

export const ImageSliderInner = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({ theme }) => u(8 - 15 / 16, theme.pageMargin)};
  ${breakpoint.phone} {
    grid-auto-columns: ${({ theme }) => u(16 - 15 / 16, theme.pageMargin)};
  }
`;
