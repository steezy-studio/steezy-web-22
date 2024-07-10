import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Nano = styled(motion.span)`
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.8em;
  /* extends global .uppercase class */
  &.uppercase {
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 11px;
  }
  ${breakpoint.phone} {
    font-size: 12px;
  }
`;
