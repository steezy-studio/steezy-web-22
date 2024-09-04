import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const StyledApparel = styled.div`
  margin-top: ${spaces.xl}px;
`;

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${spaces.xs}px;
  row-gap: ${spaces.xs}px;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoint.miniPhone} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ApparelOtherProjects = styled.div`
  margin-top: ${spaces.xxxxl}px;
  ${breakpoint.phone} {
    margin: ${spaces.xxl}px 0;
  }
`;

export const ProductsGridSection = styled.section`
  display: grid;
  row-gap: ${spaces.m}px;
`;
