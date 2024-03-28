import React from "react";
import { StyledProductCard } from "./StyledProductCard";
import { Small } from "../Typo/Small";

interface ProductCardProps {
  title: string;
}

const ProductCard = ({ title }: ProductCardProps) => {
  return (
    <StyledProductCard>
      <Small>{title}</Small>
    </StyledProductCard>
  );
};

export default ProductCard;
