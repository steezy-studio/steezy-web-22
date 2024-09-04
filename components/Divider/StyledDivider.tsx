"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ColorKeys, colors } from "../../helpers/consts";

export const StyledDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const DividerLine = styled(motion.div)<{ color: ColorKeys }>`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => colors[color]};
  transform-origin: 0 0;
  &.reverse {
    transform-origin: 100% 0;
  }
`;
