import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";

export const StyledGridItem = styled(motion.a)`
  all: unset;
  display: block;
`;

export const GridItemAreas = styled.div`
  position: absolute;
  bottom: ${spaces.m}px;
  left: ${spaces.m}px;
  display: flex;
  column-gap: ${spaces.xxs}px;
`;

export const GridItemCoverWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const GridItemGrad = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 30%);
`;

export const GridItemHeader = styled(motion.div)`
  position: absolute;
  top: ${spaces.m}px;
  left: ${spaces.m}px;
  right: ${spaces.m}px;
  z-index: 2;
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
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
`;
