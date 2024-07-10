import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import Link from "../Link/Link";
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
        <div>
          <Small>
            <Link href={`/apparel/${merchandise.product.handle}`}>
              {merchandise.product.title.trim()}
            </Link>
          </Small>
        </div>
        <Micro className='uppercase'>{`Size: ${merchandise.title}`}</Micro>
      </CartItemSize>
      <Small style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Small>
      <CartQuantityInput />
    </StyledCartItem>
  );
};

export default CartItem;
