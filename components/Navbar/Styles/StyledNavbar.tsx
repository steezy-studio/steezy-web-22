import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../consts";
import u from "../../../helpers/unit";

export const StyledNavbar = styled.nav`
  position: fixed;
  pointer-events: none;
  z-index: 99;
  width: ${({ theme }) => u(16, theme.pageMargin)};
  top: ${({ theme }) => theme.pageMargin};
  left: ${({ theme }) => theme.pageMargin};
  right: ${({ theme }) => theme.pageMargin};
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const NavLinks = styled(motion.div)`
  background-color: ${colors.black};
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
