import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledVideo = styled.div<{ ratio: number }>`
  position: relative;
  padding-bottom: ${({ ratio }) => ratio * 100}%;
  width: 100%;
`;

export const Loop = styled.video`
  width: 100%;
  cursor: none;
  position: absolute;
  inset: 0;
`;

export const Showreel = styled.div`
  position: relative;
  width: 80vw;
  max-height: 80vh;
  padding-bottom: 56.25%;
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
`;

export const Cursor = styled(motion.img)`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  margin-left: -40px;
  margin-top: -40px;
  pointer-events: none;
`;
