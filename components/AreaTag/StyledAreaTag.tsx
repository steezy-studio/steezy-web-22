import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";

export const StyledAreaTag = styled.div`
  background-color: ${colors.white};
  display: inline-block;
  padding: 3px 8px;
  border-radius: 8px;
  > * {
    display: block;
    transform: translateY(0.02em);
  }
  ${breakpoint.tabletLandscape} {
    padding: 0px 6px 0px;
  }
`;
