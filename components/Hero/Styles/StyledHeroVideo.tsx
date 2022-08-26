import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledHeroVideo = styled.div<{ ratio?: number }>`
  position: relative;
  overflow: hidden;
  ${breakpoint.phone} {
    padding-bottom: ${(5 / 4) * 100}%;
  }
`;

export const Loop = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* cursor: pointer; */
  ${breakpoint.phone} {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 60vh; */
  }
`;

export const Showreel = styled.div`
  position: relative;
  width: 80vw;
  max-height: 80vh;
  ${breakpoint.phone} {
    width: ${({ theme }) => `calc(100vw - ${theme.pageMargin} * 2)`};
  }
`;

export const PlayButton = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: ${({ theme }) => theme.navbarHeight};
  height: ${({ theme }) => theme.navbarHeight};
  /* cursor: pointer; */
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 15px;
  &:hover {
    background-color: ${colors.primary400};
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 25%;
    background-repeat: no-repeat;
    background-image: url("/icons/play-button.svg");
  }
  ${breakpoint.largeNotebook} {
    padding: 0px;
  }
`;
