import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";
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

export const IgPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  background-color: ${colors.gray100};
  animation: loading 1.5s infinite;
  border-radius: 10px;
  @keyframes loading {
    0% {
      background-color: ${colors.gray100};
    }
    50% {
      background-color: ${colors.gray200};
    }
    100% {
      background-color: ${colors.gray100};
    }
  }
`;
