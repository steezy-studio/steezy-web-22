import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const Medium = styled.p`
  /* variable is used for optical correction of Editorial New  */
  --medium-font-size: 28px;
  font-size: var(--medium-font-size);
  font-weight: 400;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  max-width: 600px;
  &.bold {
    font-weight: 500;
  }
  &.editorial {
    font-size: calc(var(--medium-font-size) * 1.2);
    letter-spacing: 0em;
  }
  ${breakpoint.smallNotebook} {
    --medium-font-size: 21px;
    max-width: 500px;
  }
  ${breakpoint.tabletLandscape} {
    --medium-font-size: 18px;
    max-width: 450px;
  }
  ${breakpoint.phone} {
    max-width: 400px;
  }
  ${breakpoint.monitor} {
    max-width: 800px;
  }
`;
