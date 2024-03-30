import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Big } from "../Typography/Big";
import { Micro } from "../Typography/Micro";
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
        <Big className='uppercase black'>{merchandise.product.title}</Big>
        <Micro className='black uppercase'>{`Velikost ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Big className='black' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Big>
      <QuantityContainer style={{ gridArea: "quantity" }}>
        <Micro className='black uppercase'>počet kusů</Micro>
        <CartQuantityInput />
      </QuantityContainer>
    </StyledCartItem>
  );
};

export default CartItem;
