import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Micro } from "../Typo/Micro";
import { Small } from "../Typo/Small";
import CartQuantityInput from "./CartQuantityInput";
import { CartItemSize, StyledCartItem } from "./Styles/StyledCartItem";
import Link from "../Link/Link";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { merchandise, cost } = useCartLine();

  return (
    <StyledCartItem>
      <CartItemSize style={{ gridArea: "title" }}>
        <div>
          <Small className='medium'>
            <Link
              href={`/apparel/${merchandise.product.handle}`}
              className='agrandir'
            >
              {merchandise.product.title}
            </Link>
          </Small>
        </div>
        <Micro className='black uppercase'>{`Size: ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Small className='black medium' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Small>
      <CartQuantityInput />
    </StyledCartItem>
  );
};

export default CartItem;
