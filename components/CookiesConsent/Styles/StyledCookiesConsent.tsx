import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledCookiesConsent = styled.div`
  display: none;
  position: fixed;
  bottom: ${({ theme }) => theme.pageMargin};
  right: ${({ theme }) => theme.pageMargin};
  z-index: 999999;
  background-color: ${colors.primary300};
  padding: 20px 10px;
`;

export const CookiesButton = styled.button`
  background-color: transparent;
  border: unset;
  background-color: ${colors.black};
`;
