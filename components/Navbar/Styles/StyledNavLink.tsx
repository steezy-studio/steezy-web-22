import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledNavLink = styled(motion.a)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;
  &:hover {
    color: ${colors.primary400} !important;
  }
  &,
  &:visited {
    color: ${colors.black};
  }
  &.active {
    & {
      color: ${colors.primary400} !important;
    }
  }
  ${breakpoint.largeNotebook} {
    font-size: 11px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 9px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 60px;
    font-family: "migra-italic";
    font-weight: 300;
    width: fit-content;
    text-transform: lowercase;
    letter-spacing: 0.01em;
    padding: 2px 0;
    text-align: right;
    &:hover,
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
  }
  ${breakpoint.tabletPortrait} {
    font-size: 50px;
  }
  ${breakpoint.phone} {
    font-size: 30px;
  }
  ${breakpoint.miniPhone} {
    font-size: 28px;
  }
`;
