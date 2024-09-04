import { motion } from "framer-motion";
import Image from "next/image";
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
  line-height: 1.1em;
  padding-top: 0.2em;
  transition: all 0.3s;
  overflow: hidden;
  &,
  &:visited {
    color: ${colors.black};
  }
  &.active {
    font-style: italic;
  }
  ${breakpoint.smallNotebook} {
    font-size: 8vh;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 7vh;
  }
  ${breakpoint.phone} {
    font-size: 6vh;
  }
  ${breakpoint.miniPhone} {
    font-size: 5vh;
  }
`;

export const NavLinkInner = styled(motion.div)`
  width: 100%;
  display: flex;
  /* overflow: hidden; */
  ${breakpoint.tabletPortrait} {
    justify-content: flex-end;
  }
`;

export const NavLinkGifW = styled(motion.div)``;

export const NavLinkGifWI = styled.div`
  position: absolute;
  top: -100px;
  left: -100px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
`;

export const NavLinkGif = styled(Image)`
  display: block;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const NavlinkChildrenW = styled.span`
  display: block;
  position: relative;
  z-index: 2;
`;
