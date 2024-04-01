import styled from "styled-components";
import { spaces } from "../helpers/spaces";

export const StyledApparel = styled.div`
  margin-top: ${spaces.xl}px;
`;

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${spaces.xs}px;
  row-gap: ${spaces.xs}px;
`;

export const ApparelOtherProjects = styled.div`
  margin-top: ${spaces.xxxxl}px;
`;

export const ProductsGridSection = styled.section`
  display: grid;
  row-gap: ${spaces.m}px;
`;
