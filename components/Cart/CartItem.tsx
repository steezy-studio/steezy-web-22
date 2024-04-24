import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Micro } from "../Typo/Micro";
import { Small } from "../Typo/Small";
import CartQuantityInput from "./CartQuantityInput";
import { CartItemSize, StyledCartItem } from "./Styles/StyledCartItem";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { merchandise, cost } = useCartLine();
  return (
    <StyledCartItem>
      <CartItemSize style={{ gridArea: "title" }}>
        <Small className='medium'>{merchandise.product.title}</Small>
        <Micro className='black uppercase'>{`Size ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Small className='black medium' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Small>
      <CartQuantityInput />
    </StyledCartItem>
  );
};

export default CartItem;
