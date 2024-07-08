"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const SMarquee = styled.div`
  overflow: hidden;
  width: 100%;
  touch-action: none;
  &.draggable {
    cursor: grab;
    user-select: none;
  }
`;

export const MarqueeBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const MarqueeInner = styled(motion.div)`
  width: max-content;
  display: flex;
  align-items: center;
`;

export const MarqueeItem = styled.div`
  flex-shrink: 0;
  user-select: none;
`;
