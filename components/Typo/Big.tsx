import styled from "styled-components";
import { addColorClasses } from "../../helpers/colorClasses";
import { breakpoint, colors } from "../../helpers/consts";
import { StyledContact } from "../../pagestyles/StyledContact";

export const Big = styled.h1`
  font-family: "editorial-new", "Times New Roman", Times, serif;
  font-size: 80px;
  line-height: 1.1em;
  letter-spacing: -0.01em;
  font-weight: 400;
  color: ${colors.black};
  &.tac {
    text-align: center;
  }
  &.underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 70px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 60px;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 40px;
  }
  ${breakpoint.phone} {
    font-size: 40px;
  }
  ${StyledContact} & {
    line-height: 1.2em;
  }
  ${addColorClasses()}
`;
