import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledHeaderLine = styled.div`
  display: flex;
  column-gap: ${spaces.m}px;
  align-items: center;
  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const Header = styled.div`
  flex-shrink: 0;
`;

export const Line = styled.div`
  flex-shrink: 1;
  height: 1px;
  width: 80px;
  background-color: ${colors.black};
`;
