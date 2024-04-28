import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledNavLink = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12vh;
  font-weight: 300;
  letter-spacing: -0.01em;
  line-height: 1em;
  margin-top: 0.2em;
  transition: all 0.3s;
  &:hover {
    font-style: oblique 10deg;
    font-stretch: 120%;
  }
  &,
  &:visited {
    color: ${colors.black};
  }
  &.active {
    /* font-style: oblique 15deg;
    font-stretch: 170%; */
  }
`;

export const NavIconW = styled(motion.div)`
  display: block;
  position: relative;
  height: 0.8em;
  margin-bottom: 0.2em;
  aspect-ratio: 1;
  margin-right: 0.2em;
`;

export const NavIcon = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  height: 100%;
`;
