import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledBurger = styled.div`
  display: flex;
  pointer-events: all;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.black};
  border-radius: 15px;
  width: ${({ theme }) => theme.navbarHeight};
  height: 100%;
  flex-shrink: 0;
  position: relative;
  z-index: 9999999;
  padding: 15px;
  svg {
    width: 100%;
    height: auto;
  }
  line {
    stroke: ${colors.black};
  }
  &:hover {
    background-color: ${colors.black};
    line {
      stroke: ${colors.white};
    }
  }
  &.open {
    background-color: ${colors.black};
    line {
      stroke: ${colors.white};
    }
    &:hover {
      background-color: ${colors.white};
      line {
        stroke: ${colors.black};
      }
    }
  }
  ${breakpoint.phone} {
    padding: 5px;
  }
`;

export const BurgerSvg = styled.svg``;
