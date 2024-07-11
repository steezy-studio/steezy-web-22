import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledFooter = styled.footer`
  display: grid;
  grid-gap: ${spaces.l}px;
  margin-top: ${spaces.xxl}px;
  padding-bottom: ${spaces.xl}px;
  ${breakpoint.smallNotebook} {
    margin-top: ${spaces.xxxl}px;
  }
  ${breakpoint.tabletLandscape} {
    padding-bottom: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    margin-top: ${spaces.xxxl}px;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    justify-items: start;
    grid-template-columns: unset;
    grid-row-gap: 30px;
  }
`;

export const DetailedContact = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  justify-content: start;
  align-items: center;
  grid-gap: 60px;
  ${breakpoint.tabletPortrait} {
    grid-gap: 30px;
    justify-content: end;
  }
  ${breakpoint.phone} {
    justify-content: start;
  }
`;

export const PhoneOnly = styled.div`
  display: none;
  ${breakpoint.phone} {
    display: block;
  }
`;

export const FooterSocials = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: start;
  align-items: center;
  column-gap: 10px;
`;
