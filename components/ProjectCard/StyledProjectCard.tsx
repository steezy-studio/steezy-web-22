import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";

export const StyledProjectCard = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.bRad};
  padding-bottom: ${(16 / 9) * 100}%;
  &.wide {
    padding-bottom: ${(9 / 16) * 100}%;
  }
  ${breakpoint.phone} {
    padding-bottom: ${(5 / 4) * 100}%;
    &.wide {
      padding-bottom: ${(5 / 4) * 100}%;
    }
  }
`;
