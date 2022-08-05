import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledHeroVideo = styled.div<{ ratio?: number }>`
  position: relative;
  overflow: hidden;
`;

export const Loop = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
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

export const PlayButton = styled.div`
  position: absolute;
  z-index: 1;
  width: 80px;
  height: 80px;
  pointer-events: none;
  right: 0;
  bottom: 0;
  background-color: ${colors.primary300};
  padding: 15px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/icons/play-button.svg");
  }
  ${breakpoint.largeNotebook} {
    width: 70px;
    height: 70px;
  }
`;
