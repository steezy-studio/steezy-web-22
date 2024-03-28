import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Medium = styled.p`
  font-size: 30px;
  font-weight: 300;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  max-width: 600px;
  &.medium {
    font-weight: 500;
  }
  &.big {
    font-family: "agrandir";
    font-weight: 500;
    font-size: 35px;
    max-width: 650px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 21px;
    max-width: 500px;
    &.big {
      font-size: 26px;
      max-width: 550px;
    }
  }
  ${breakpoint.tabletLandscape} {
    font-size: 18px;
    max-width: 450px;
    &.big {
      font-size: 21px;
      max-width: 500px;
    }
  }
  ${breakpoint.phone} {
    font-size: 18px;
    max-width: 400px;
    &.big {
      font-size: 18px;
      max-width: 450px;
    }
  }
  ${breakpoint.monitor} {
    max-width: 800px;
    &.big {
      max-width: 800px;
    }
  }
`;
