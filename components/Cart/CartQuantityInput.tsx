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

interface CartQuantityInputProps {}

const CartQuantityInput = ({}: CartQuantityInputProps) => {
  return (
    <StyledCartQuantityInput>
      <QuantityField>
        <CartLineQuantity />
      </QuantityField>
      <AdjustButtons>
        <CartLineQuantityAdjustButton adjust='increase' as='span'>
          <AdjustButtonWrapper>
            <Plus />
          </AdjustButtonWrapper>
        </CartLineQuantityAdjustButton>
        <CartLineQuantityAdjustButton adjust='decrease' as={"span"}>
          <AdjustButtonWrapper className='minus'>
            <Minus />
          </AdjustButtonWrapper>
        </CartLineQuantityAdjustButton>
      </AdjustButtons>
    </StyledCartQuantityInput>
  );
};

export default CartQuantityInput;
