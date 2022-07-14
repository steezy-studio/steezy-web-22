import styled from "styled-components";
import { colors } from "../../../consts";

export const StyledNavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  padding: 0 20px;
  &,
  &:visited {
    color: ${colors.gray500};
  }
  &.active {
    & {
      color: ${colors.primary400} !important;
    }
  }
  &.highlighted {
    &,
    &:visited {
      color: ${colors.white};
    }
  }
`;
