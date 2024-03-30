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

export const ProductGallery = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const ProductInfo = styled.div`
  position: sticky;
  top: ${spaces.xxxxl}px;
`;

export const ProductGalleryImg = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
`;
