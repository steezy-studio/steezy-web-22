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
  ${breakpoint.smallNotebook} {
    gap: ${spaces.xl}px;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SubServicesList = styled.div`
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    margin-top: ${spaces.xs}px;
  }
`;
