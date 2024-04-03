import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import { breakpoint } from "../../helpers/consts";

export const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${spaces.xl}px;
  ${breakpoint.phone} {
    flex-direction: column;
    row-gap: ${spaces.xxs}px;
    align-items: start;
  }
`;
