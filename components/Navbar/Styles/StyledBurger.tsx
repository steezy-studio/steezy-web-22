import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledBurger = styled.div`
  display: flex;
  pointer-events: all;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.black};
  border-radius: ${({ theme }) => theme.bRad};
  height: 100%;
  backdrop-filter: blur(5px);
  aspect-ratio: 1;
  flex-shrink: 0;
  position: relative;
  padding: 10px;
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
