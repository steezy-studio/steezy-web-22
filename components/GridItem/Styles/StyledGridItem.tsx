import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";

export const StyledGridItem = styled(motion.a)`
  all: unset;
  display: block;
  position: relative;
  border-radius: ${({ theme }) => theme.bRad};
  aspect-ratio: 9/16;
  overflow: hidden;
  &.wide {
    aspect-ratio: 16/9;
  }
`;

export const GridItemAreas = styled.div`
  position: absolute;
  bottom: ${spaces.m}px;
  left: ${spaces.m}px;
`;

export const GridItemCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GridItemHeader = styled.div`
  position: absolute;
  top: ${spaces.m}px;
  left: ${spaces.m}px;
`;

export const GridItemVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const GridItemCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;

export const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;
