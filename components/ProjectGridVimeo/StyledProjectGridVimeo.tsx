import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProjectGridVimeo = styled(motion.div)`
  position: relative;
`;

export const VimeoWrapper = styled(Vimeo)`
  width: 100%;
  height: 100%;
`;
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
