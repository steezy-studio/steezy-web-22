import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { NextProjectSection } from "../../../pagestyles/StyledProject";

export const StyledGridItem = styled(motion.a)`
  display: grid;
  grid-gap: 20px;
  align-items: start;
  color: unset;
  ${breakpoint.tabletLandscape} {
    grid-row-gap: 10px;
  }
  ${breakpoint.tabletPortrait} {
    grid-row-gap: 5px;
  }
  ${NextProjectSection} & {
    align-content: start;
  }
`;

export const GridItemAreas = styled.div``;

export const GridItemCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GridItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GridItemVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;
