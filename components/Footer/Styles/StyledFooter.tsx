import styled from "styled-components";
import { breakpoint } from "../../../consts";
import u from "../../../helpers/unit";

export const StyledFooter = styled.footer`
  display: grid;
  grid-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
  margin-bottom: 100px;
  ${breakpoint.tabletLandscape} {
    margin-bottom: 60px;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-row-gap: 30px;
  }
`;

export const DetailedContact = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;
  grid-gap: 60px;
`;
