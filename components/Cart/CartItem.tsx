import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Large } from "../Typo/Large";
import { Medium } from "../Typo/Medium";
import { Micro } from "../Typo/Micro";
import CartQuantityInput from "./CartQuantityInput";
import { CartItemSize, StyledCartItem } from "./Styles/StyledCartItem";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { merchandise, cost } = useCartLine();
  return (
    <StyledCartItem>
      <CartItemSize style={{ gridArea: "title" }}>
        <Medium className='medium'>{merchandise.product.title}</Medium>
        <Micro className='black uppercase'>{`Size ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Large className='black' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Large>
      <CartQuantityInput />
    </StyledCartItem>
  );
};

export default CartItem;
