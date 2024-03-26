import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledServicesSection = styled.div`
  display: flex;
  column-gap: ${spaces.xl}px;
  justify-content: space-between;
  max-width: 1600px;
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${spaces.xxxl}px;
  grid-column-gap: ${spaces.xxxxl}px;
`;

export const SubServicesList = styled.div`
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    margin-top: ${spaces.xs}px;
  }
`;
