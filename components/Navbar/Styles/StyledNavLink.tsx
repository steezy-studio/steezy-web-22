import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledNavLink = styled(motion.a)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 7vw;
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
    font-style: oblique 15deg;
    font-stretch: 170%;
  }
  ${breakpoint.tabletLandscape} {
  }
  ${breakpoint.tabletPortrait} {
  }
  ${breakpoint.phone} {
  }
  ${breakpoint.miniPhone} {
  }
`;
