import Image from "next/image";
import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import Link from "next/link";
import { motion } from "framer-motion";
import { breakpoint, colors } from "../../helpers/consts";

export const StyledProductCard = styled(Link)`
  all: unset;
  display: block;
  aspect-ratio: 9/16;
  overflow: hidden;
  position: relative;
  border-radius: ${({ theme }) => theme.bRad};
  &.inactive {
    opacity: 0.5;
  }
  ${breakpoint.phone} {
    aspect-ratio: 4/5;
  }
`;

export const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 2;
  inset: ${spaces.m}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoint.phone} {
    /* display: none; */
  }
`;

export const ProductCardCoverW = styled(motion.div)`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  inset: 0;
`;

export const ProductCardInfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: ${spaces.xs}px;
`;

export const ProductCardInfoHeader = styled.div``;

export const ProductCardCoverWI = styled(motion.div)`
  position: absolute;
  inset: 0;
`;
export const ProductCardInfoGrad = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2) 0%,
    transparent 30%,
    transparent 70%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

export const ProductCardCover = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProductCardButton = styled(motion.div)`
  background-color: ${colors.white};
  flex-basis: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
