import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledHeroVideo = styled.div<{ ratio?: number }>`
  position: relative;
`;

export const Loop = styled.video`
  width: 100%;
  height: 100%;
  cursor: none;
  object-fit: contain;
  ${breakpoint.phone} {
    object-fit: cover;
  }
`;

export const Showreel = styled.div`
  position: relative;
  width: 80vw;
  max-height: 80vh;
  padding-bottom: 56.25%;
  video {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Cursor = styled(motion.img)`
  position: absolute;
  z-index: 1;
  width: 140px;
  height: 140px;
  transform: translate(-50%, -50%);
  margin-left: -70px;
  margin-top: -70px;
  pointer-events: none;
  ${breakpoint.largeNotebook} {
    width: 100px;
    height: 100px;
  }
`;
