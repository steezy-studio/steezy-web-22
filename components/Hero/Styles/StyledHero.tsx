import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledHero = styled.div`
  margin-top: ${({ theme }) => `calc(${theme.navbarHeight} + ${spaces.xl}px)`};
  position: relative;
  ${breakpoint.phone} {
    padding-top: 70px;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 991;
`;
