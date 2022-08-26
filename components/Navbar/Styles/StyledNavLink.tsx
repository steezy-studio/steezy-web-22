import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledNavLink = styled(motion.a)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  padding: 0 20px;
  &:hover {
    color: ${colors.primary400} !important;
  }
  &,
  &:visited {
    color: ${colors.gray500};
  }
  &.active {
    & {
      color: ${colors.primary400} !important;
    }
  }
  &.highlighted {
    &,
    &:visited {
      color: ${colors.white};
    }
  }
  ${breakpoint.largeNotebook} {
    font-size: 12px;
    padding: 0 15px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 11px;
    padding: 0 10px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 44px;
    font-family: "migra-italic";
    text-transform: lowercase;
    text-decoration: underline;
    letter-spacing: 0.03em;
    padding: 2px 0;
    &.active {
      & {
        color: ${colors.black} !important;
        position: relative;
        &:after {
          content: "";
          display: block;
          background-color: ${colors.primary400};
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1em;
          z-index: -1;
        }
      }
    }
    &,
    &:visited {
      color: ${colors.black};
    }
    &.highlighted {
      &,
      &:visited {
        color: ${colors.black};
      }
    }
  }
  ${breakpoint.phone} {
    font-size: 28px;
  }
`;
