import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Small = styled(motion.p)`
  font-size: 19px;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  font-weight: 400;
  max-width: 600px;
  &.bold {
    font-weight: 500;
  }
  &.big-lh {
    line-height: 1.7em;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 16px;
  }
`;
