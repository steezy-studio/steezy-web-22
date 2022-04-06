import styled from "styled-components";
import u from "../../../helpers/unit";

export const StyledFooter = styled.footer`
  display: grid;
  grid-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
  margin-bottom: ${({ theme }) => u(0.5, theme.pageMargin)};
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
`;

export const DetailedContact = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => u(1, theme.pageMargin)};
`;
