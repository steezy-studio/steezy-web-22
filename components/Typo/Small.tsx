import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { addColorClasses } from "../../helpers/colorClasses";

export const Small = styled.p`
  font-size: 24px;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  font-family: "agrandir";
  font-weight: 300;
  &.break-lines {
    white-space: pre-wrap;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  &.big-lh {
    line-height: 1.7em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 21px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 16px;
  }
  ${addColorClasses()}
`;
