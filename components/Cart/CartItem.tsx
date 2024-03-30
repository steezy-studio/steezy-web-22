import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import CartQuantityInput from "./CartQuantityInput";
import {
  CartItemSize,
  QuantityContainer,
  StyledCartItem,
} from "./Styles/StyledCartItem";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { merchandise, cost } = useCartLine();

  return (
    <StyledCartItem>
      <CartItemSize style={{ gridArea: "title" }}>
        <Large className='uppercase black'>{merchandise.product.title}</Large>
        <Micro className='black uppercase'>{`Velikost ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Large className='black' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Large>
      <QuantityContainer style={{ gridArea: "quantity" }}>
        <Micro className='black uppercase'>počet kusů</Micro>
        <CartQuantityInput />
      </QuantityContainer>
    </StyledCartItem>
  );
};

export default CartItem;
