import styled from "styled-components";
import { colors } from "../../../consts";

export const StyledNavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  &,
  &:visited {
    color: ${colors.gray500};
  }
  &.highlighted {
    &,
    &:visited {
      color: ${colors.white};
    }
  }
`;
