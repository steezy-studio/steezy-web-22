import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { addColorClasses } from "../../helpers/colorClasses";

export const Small = styled.p`
  font-size: 19px;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  font-family: "agrandir";
  font-weight: 300;
  &.medium {
    font-weight: 400;
  }
  &.break-lines {
    white-space: pre-wrap;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  &.big-lh {
    line-height: 1.7em;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 16px;
  }
  ${addColorClasses()}
`;
