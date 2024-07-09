import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledNavLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 9vh;
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
    font-style: oblique 15deg;
    font-stretch: 170%;
  }
  ${breakpoint.smallNotebook} {
    font-size: 8vh;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 9vh;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 4vh;
  }
  ${breakpoint.phone} {
    font-size: 35px;
  }
  ${breakpoint.miniPhone} {
    font-size: 26px;
  }
`;
