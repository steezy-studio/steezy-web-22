import styled from "styled-components";
import { TextBlock } from "../../pagestyles/StyledStudio";

export const Small = styled.p`
  font-size: 28px;
  line-height: 1.3em;
  font-family: "agrandir";
  font-weight: 300;
  ${TextBlock} & {
    width: 50%;
  }
  &.big-lh {
    line-height: 1.5em;
  }
`;
