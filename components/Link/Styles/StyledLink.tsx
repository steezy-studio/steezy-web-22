import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const LinkBg = styled.div`
  width: 100%;
  position: absolute;
  height: 0.85em;
  top: 0;
  background-color: ${colors.primary400};
  left: 0;
  mix-blend-mode: multiply;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  &.agrandir {
    height: 1.1em;
  }
`;

export const StyledLink = styled.span`
  &,
  a {
    position: relative;
    font-family: inherit;
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    &:hover {
      .bg {
        transform: scaleX(1);
      }
    }
    &.no-underline {
      text-decoration: none !important;
    }
    &.active,
    &.active a {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;
