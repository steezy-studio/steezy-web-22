"use client";
import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const SFeaturedProducts = styled.div``;

export const FeaturedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spaces.xs}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.custom(750)} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    gap: ${spaces.xs}px;
    > :nth-child(4) {
      display: none;
    }
  }
`;
