import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Small = styled.p`
  font-size: 26px;
  line-height: 1.3em;
  font-family: "agrandir";
  font-weight: 300;
  &.break-lines {
    white-space: pre-wrap;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  &.big-lh {
    line-height: 1.3em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 21px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 16px;
  }
`;
