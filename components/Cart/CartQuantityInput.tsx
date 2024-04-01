"use client";

import {
  CartLineQuantity,
  CartLineQuantityAdjustButton,
} from "@shopify/hydrogen-react";
import {
  AdjustButtonWrapper,
  AdjustButtons,
  QuantityField,
  StyledCartQuantityInput,
} from "./Styles/StyledCartQuantityInput";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";
import { useContext } from "react";
import { HoverProvider } from "../../pages/_app";

interface CartQuantityInputProps {}

const CartQuantityInput = ({}: CartQuantityInputProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledCartQuantityInput>
      <QuantityField>
        <CartLineQuantity />
      </QuantityField>
      <AdjustButtons>
        <CartLineQuantityAdjustButton
          adjust='increase'
          as='span'
          onMouseEnter={() => {
            setCursorType("hover");
          }}
          onMouseLeave={() => {
            setCursorType("normal");
          }}
        >
          <AdjustButtonWrapper>
            <Plus />
          </AdjustButtonWrapper>
        </CartLineQuantityAdjustButton>
        <CartLineQuantityAdjustButton
          adjust='decrease'
          as={"span"}
          onMouseEnter={() => {
            setCursorType("hover");
          }}
          onMouseLeave={() => {
            setCursorType("normal");
          }}
        >
          <AdjustButtonWrapper className='minus'>
            <Minus />
          </AdjustButtonWrapper>
        </CartLineQuantityAdjustButton>
      </AdjustButtons>
    </StyledCartQuantityInput>
  );
};

export default CartQuantityInput;
