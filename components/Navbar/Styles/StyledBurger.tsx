import styled from "styled-components";
import { breakpoint, colors } from "../../../consts";

export const StyledBurger = styled.div`
  display: flex;
  pointer-events: all;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  cursor: pointer;
  width: 80px;
  height: 100%;
  flex-shrink: 0;
  ${breakpoint.largeNotebook} {
    width: 70px;
  }
  ${breakpoint.smallNotebook} {
    width: 60px;
  }
`;
