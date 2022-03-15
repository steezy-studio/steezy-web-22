import styled from "styled-components";
import { colors } from "../../../consts";

export const StyledLink = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    background-color: ${colors.primary400};
    left: 0;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
