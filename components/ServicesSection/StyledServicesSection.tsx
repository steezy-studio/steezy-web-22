import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledServicesSection = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  align-items: start;
  max-width: 1600px;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 250px 1fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: ${spaces.xl}px;
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${spaces.xxxl}px;
  column-gap: ${spaces.xxxxl}px;
  ${breakpoint.custom(1500)} {
    column-gap: ${spaces.xxl}px;
  }
  ${breakpoint.smallNotebook} {
    gap: ${spaces.xl}px;
  }
  ${breakpoint.custom(700)} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoint.miniPhone} {
    column-gap: ${spaces.s}px;
  }
`;

export const SubServicesList = styled.div`
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    margin-top: ${spaces.xs}px;
  }
`;
