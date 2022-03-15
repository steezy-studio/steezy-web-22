import styled from "styled-components";
import { colors } from "../../../consts";

export const StyledNavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${colors.gray500};
  &.highlighted {
    color: ${colors.white};
  }
`;
