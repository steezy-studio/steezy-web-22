import { motion } from "framer-motion";
import styled from "styled-components";
import u from "../../../helpers/unit";

export const StyledImageSlider = styled.div`
  margin: 0 ${({ theme }) => `calc(-1 * ${theme.pageMargin})`};
  max-width: 100vw;
  overflow: hidden;
`;

export const ImageSliderInner = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({ theme }) => u(8 - 15 / 16, theme.pageMargin)};
`;
