"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../helpers/consts";

export const SPageTransition = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: ${colors.white};
`;
