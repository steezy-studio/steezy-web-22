import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";

export const StyledAreaTag = styled.div`
  background-color: ${colors.white};
  display: inline-block;
  padding: 0px 8px 2px;
  border-radius: 8px;
  ${breakpoint.tabletPortrait} {
    padding: 0px 9px 2px;
  }
`;
