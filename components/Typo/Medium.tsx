import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Medium = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  max-width: 600px;
  &.bold {
    font-weight: 500;
  }
  ${breakpoint.smallNotebook} {
    font-size: 21px;
    max-width: 500px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 18px;
    max-width: 450px;
  }
  ${breakpoint.phone} {
    font-size: 18px;
    max-width: 400px;
  }
  ${breakpoint.monitor} {
    max-width: 800px;
  }
`;
