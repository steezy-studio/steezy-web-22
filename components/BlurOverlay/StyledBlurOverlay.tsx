import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBlurOverlay = styled(motion.div)`
  pointer-events: all;
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 1;
`;
