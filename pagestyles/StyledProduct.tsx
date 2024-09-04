import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const StyledProduct = styled.div``;

export const ProductSection = styled.section`
  display: flex;
  margin-top: ${spaces.xl}px;
  column-gap: ${spaces.xl}px;
  align-items: start;
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
    margin-top: ${spaces.l}px;
    row-gap: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
  }
`;

export const ProductGallery = styled.section`
  margin-top: ${spaces.xxl}px;
  flex-grow: 1;
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const ProductOptions = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  margin: ${spaces.l}px 0;
`;

export const ProductHeroVideo = styled.div``;

export const ProductInfo = styled.div`
  min-width: 400px;
  ${breakpoint.smallNotebook} {
    min-width: 300px;
  }
`;

export const ProductText = styled.div`
  display: grid;
  row-gap: ${spaces.s}px;
`;

export const ProductGalleryImg = styled(Image)`
  display: block;
  width: auto;
  padding: 0 ${spaces.xxs}px;
  height: 600px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.bRad};
  ${breakpoint.tabletLandscape} {
    height: 50vh;
  }
`;

export const ProductFeaturedProducts = styled.section`
  margin-top: ${spaces.xxxxl}px;
`;

export const ProductFeaturedProjects = styled.section`
  margin-top: ${spaces.xxxxl}px;
`;
