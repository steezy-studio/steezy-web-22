import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const LinkBg = styled.span`
  display: block;
  width: 110%;
  height: 120%;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${colors.primary400};
  mix-blend-mode: multiply;
  transform: translate(-50%, -50%) scaleX(0);
  transform-origin: 0;
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-family: inherit;
  color: inherit;
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  &:hover {
    .bg {
      transform: translate(-50%, -50%) scaleX(1);
    }
  }
  &.no-underline {
    text-decoration: none !important;
  }
  &.active,
  &.active a {
    .bg {
      transform: translate(-50%, -50%) scaleX(1);
    }
  }
`;
