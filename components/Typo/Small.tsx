import styled from "styled-components";
import { breakpoint } from "../../consts";
import { TextBlock } from "../../pagestyles/StyledStudio";

export const Small = styled.p`
  font-size: 26px;
  line-height: 1.3em;
  font-family: "agrandir";
  font-weight: 300;
  &.big-lh {
    line-height: 1.3em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 21px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
`;
