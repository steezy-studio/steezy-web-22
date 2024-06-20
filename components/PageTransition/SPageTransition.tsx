"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../helpers/consts";

export const SPageTransition = styled(motion.div)`
  position: fixed;
  inset: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${colors.white};
`;
