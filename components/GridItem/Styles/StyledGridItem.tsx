import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";
import { breakpoint } from "../../../helpers/consts";

export const StyledGridItem = styled(motion.a)`
  all: unset;
  display: block;
`;

export const GridItemAreas = styled.div`
  position: absolute;
  bottom: ${spaces.m}px;
  z-index: 2;
  left: ${spaces.m}px;
  display: flex;
  gap: ${spaces.xxs}px;
  ${breakpoint.tabletPortrait} {
    bottom: ${spaces.xs}px;
    left: ${spaces.xs}px;
    flex-direction: column;
    align-items: flex-start;
  }
  ${breakpoint.phone} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const GridItemCoverWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const GridItemHoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(20px);
`;

export const GridItemPhoneOverlay = styled.div`
  display: none;
  ${breakpoint.phone} {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const GridItemHeader = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: ${spaces.m}px;
  display: flex;
  align-items: center;
  z-index: 2;
  overflow: hidden;
  &.tac {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    text-align: center;
  }
  &.tal {
    text-align: left;
  }
  ${breakpoint.tabletPortrait} {
    width: calc(100% - ${2 * spaces.s}px);
  }
`;

export const GridItemHeaderInner = styled(motion.div)``;

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
