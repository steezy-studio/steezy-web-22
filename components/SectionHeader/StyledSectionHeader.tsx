import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

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

export const LinkTextInner = styled.span`
  display: flex;
  column-gap: ${spaces.m}px;
  justify-content: center;
`;
