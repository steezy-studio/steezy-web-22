import styled from "styled-components";
import { breakpoint } from "../../consts";
import { TextBlock } from "../../pagestyles/StyledStudio";

export const Small = styled.p`
  font-size: 28px;
  line-height: 1.3em;
  font-family: "agrandir";
  font-weight: 300;
  &.big-lh {
    line-height: 1.5em;
  }
  ${breakpoint.largeNotebook} {
    font-size: 24px;
  }
`;
