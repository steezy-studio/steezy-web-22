"use client";

import {
  CartLineQuantity,
  CartLineQuantityAdjustButton,
} from "@shopify/hydrogen-react";
import { useContext } from "react";
import { HoverProvider } from "../Cursor/CursorProvider";
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import { Small } from "../Typo/Small";
import {
  AdjustButtonWrapper,
  QuantityField,
  StyledCartQuantityInput,
} from "./Styles/StyledCartQuantityInput";

interface CartQuantityInputProps {}

const CartQuantityInput = ({}: CartQuantityInputProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledCartQuantityInput>
      <CartLineQuantityAdjustButton
        adjust='decrease'
        as='span'
        onMouseEnter={() => {
          setCursorType("hover");
        }}
        onMouseLeave={() => {
          setCursorType("normal");
        }}
      >
        <AdjustButtonWrapper>
          <Minus />
        </AdjustButtonWrapper>
      </CartLineQuantityAdjustButton>
      <QuantityField>
        <Small className='medium'>
          <CartLineQuantity />
        </Small>
      </QuantityField>

      <CartLineQuantityAdjustButton
        adjust='increase'
        as={"span"}
        onMouseEnter={() => {
          setCursorType("hover");
        }}
        onMouseLeave={() => {
          setCursorType("normal");
        }}
      >
        <AdjustButtonWrapper className='minus'>
          <Plus />
        </AdjustButtonWrapper>
      </CartLineQuantityAdjustButton>
    </StyledCartQuantityInput>
  );
};

export default CartQuantityInput;
