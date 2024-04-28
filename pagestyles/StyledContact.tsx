import Image from "next/image";
import styled from "styled-components";
import { spaces } from "../helpers/spaces";
import { breakpoint } from "../helpers/consts";

export const StyledContact = styled.div``;

export const ContactHero = styled.div`
  display: grid;
  margin-top: ${spaces.l}px;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spaces.m}px;
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: ${spaces.m}px;
  }
`;

export const ContactHeroCover = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const ContactInfo = styled.div`
  display: grid;
  align-content: start;
  row-gap: ${spaces.xl}px;
  margin-left: ${spaces.xl}px;
  ${breakpoint.phone} {
    margin-left: 0;
  }
`;

export const ContactDetails = styled.div`
  display: grid;
  column-gap: ${spaces.xl}px;
  row-gap: ${spaces.xl}px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const ContactSocials = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: ${spaces.xs}px;
`;

export const ContactDetail = styled.div`
  display: grid;
  align-content: start;
  max-width: 250px;
  row-gap: ${spaces.m}px;
  &.align-end {
    align-self: end;
  }
`;

export const Founders = styled.section`
  margin-top: ${spaces.xxxl}px;
`;

export const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spaces.m}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: ${spaces.m}px;
  }
`;
