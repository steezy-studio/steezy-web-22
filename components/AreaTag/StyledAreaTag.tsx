import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";

export const StyledAreaTag = styled.div`
  background-color: ${colors.white};
  display: inline-block;
  padding: 0px 10px 3px 10px;
  border-radius: 8px;
  ${breakpoint.tabletPortrait} {
    padding: 0px 7px 2px 7px;
  }
`;
