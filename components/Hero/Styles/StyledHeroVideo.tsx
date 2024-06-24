import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";

export const StyledHeroVideo = styled.div<{ ratio?: number }>`
  position: relative;
  overflow: hidden;
  aspect-ratio: 2;
  border-radius: ${({ theme }) => theme.bRad};
  ${breakpoint.phone} {
    aspect-ratio: unset;
    padding-bottom: ${(5 / 4) * 100}%;
  }
`;

export const Loop = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${breakpoint.phone} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Showreel = styled(motion.div)`
  position: relative;
  width: 80vw;
  aspect-ratio: 16 / 9;
  max-height: 80vh;
  ${breakpoint.phone} {
    width: ${({ theme }) => `calc(100vw - ${theme.pageMargin} * 2)`};
  }
`;
