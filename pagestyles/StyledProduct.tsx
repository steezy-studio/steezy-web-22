import Image from "next/image";
import styled from "styled-components";
import { spaces } from "../helpers/spaces";

export const StyledProduct = styled.div``;

export const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: ${spaces.xl}px;
  column-gap: ${spaces.xl}px;
  align-items: start;
`;

export const ProductGalleryGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${spaces.xs}px;
  column-gap: ${spaces.xs}px;
  margin-top: ${spaces.xxl}px;
`;

export const ProductOptions = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  margin: ${spaces.l}px 0;
`;

export const ProductGallery = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const ProductInfo = styled.div``;

export const ProductText = styled.div`
  display: grid;
  row-gap: ${spaces.s}px;
`;

export const ProductGalleryImg = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const ProductFeaturedProducts = styled.section`
  margin-top: ${spaces.xxxxl}px;
`;

export const ProductFeaturedProjects = styled.section`
  margin-top: ${spaces.xxxxl}px;
`;
