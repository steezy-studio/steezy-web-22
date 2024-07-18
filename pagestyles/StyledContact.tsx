import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const StyledContact = styled.div``;

export const ContactHero = styled.div`
  display: grid;
  margin-top: ${spaces.xxl}px;
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

export const ContactDetails = styled.div`
  display: flex;
  column-gap: ${spaces.xxl}px;
  row-gap: ${spaces.xl}px;
  height: 100%;
  ${breakpoint.tabletLandscape} {
    column-gap: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    column-gap: ${spaces.l}px;
  }
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
  &.wide {
    max-width: unset;
  }
`;

export const Founders = styled.section`
  margin-top: ${spaces.xxxl}px;
`;

export const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spaces.xs}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: ${spaces.m}px;
  }
`;
