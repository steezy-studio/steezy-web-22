import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledCookiesConsent = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.pageMargin};
  left: ${({ theme }) => theme.pageMargin};
  z-index: 999999;
  background-color: ${colors.primary300};
  border: 1px solid ${colors.black};
  display: flex;
  align-items: center;
`;

export const CookiesConsentMessage = styled.div`
  padding: 0 30px;
  display: inline-block;
`;

export const CookiesButton = styled.button`
  background-color: transparent;
  border: unset;
  background-color: ${colors.black};
  * {
    color: ${colors.white};
  }
  display: inline-block;
  height: 60px;
  aspect-ratio: 1;
  &:hover {
    background-color: ${colors.primary400};
    * {
      color: ${colors.black};
    }
  }
`;
