import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";

export const Micro = styled(motion.span)`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.5em;
  color: ${colors.black};
  display: inline-block;
  max-width: 400px;
  /* extends global .uppercase class */
  &.uppercase {
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }
  ${breakpoint.phone} {
    font-size: 12px;
  }
  ${breakpoint.largeNotebook} {
    font-size: 12px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 11px;
  }
`;
