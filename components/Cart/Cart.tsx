"use client";

import {
  CartCheckoutButton,
  CartLineProvider,
  useCart,
} from "@shopify/hydrogen-react";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { easing } from "../../helpers/animationConfig";
import { colors } from "../../helpers/consts";
import { formatPrice } from "../../helpers/formatPrice";
import { HoverProvider } from "../../pages/_app";
import { DisableScroll } from "../../pagestyles/DisableScroll";
import BlurOverlay from "../BlurOverlay/BlurOverlay";
import Link from "../Link/Link";
import Burger from "../Navbar/Burger";
import Scrollbar from "../Scrollbar/Scrollbar";
import { Large } from "../Typo/Large";
import { Small } from "../Typo/Small";
import CartItem from "./CartItem";
import {
  CartCheckoutButtonW,
  CartCloseWrapper,
  CartContent,
  CartFooter,
  CartHeader,
  CartItemWrapper,
  CartItems,
  Drawer,
  EmptyCart,
  StyledCart,
  TotalPrice,
} from "./Styles/StyledCart";

interface CartProps {}

export const CartToggleContext = createContext<{
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}>(null);

export const CartToggleProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartToggleContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartToggleContext.Provider>
  );
};

const Cart = ({}: CartProps) => {
  const { lines, cost } = useCart();
  const pathname = usePathname();
  const { setShowCart, showCart } = useContext(CartToggleContext);
  const { setCursorType } = useContext(HoverProvider);

  useEffect(() => {
    setShowCart(false);
  }, [pathname]);

  return (
    <>
      <StyledCart>
        <Drawer
          initial={false}
          animate={{
            x: showCart ? "0%" : "100%",
            boxShadow: showCart
              ? `10px 0 70px ${colors.black}`
              : `0px 0 0px ${colors.black}`,
          }}
          transition={{ ease: easing, duration: 0.5 }}
        >
          <CartHeader>
            <Large className='uppercase black'>Cart</Large>
            <CartCloseWrapper>
              <Burger onClick={() => setShowCart(false)} isOpen />
            </CartCloseWrapper>
          </CartHeader>
          <CartContent>
            {lines.length === 0 ? (
              <EmptyCart>
                <Large className='black'>
                  Your cart is empty, like our souls
                </Large>
                <Link href={"/products"} onClick={() => setShowCart(false)}>
                  Go fill it up
                </Link>
              </EmptyCart>
            ) : (
              <Scrollbar>
                <CartItems>
                  {lines.map((line, i) => {
                    return (
                      <CartLineProvider line={line} key={i}>
                        <CartItemWrapper>
                          <CartItem />
                        </CartItemWrapper>
                      </CartLineProvider>
                    );
                  })}
                </CartItems>
              </Scrollbar>
            )}
          </CartContent>
          {!(lines.length === 0) && (
            <CartFooter>
              <TotalPrice>
                <Large className='black'>Total</Large>
                <Large className='black'>
                  {formatPrice(cost?.totalAmount?.amount)}
                </Large>
              </TotalPrice>
              <CartCheckoutButtonW
                onMouseEnter={() => {
                  setCursorType("hover");
                }}
                onMouseLeave={() => {
                  setCursorType("normal");
                }}
              >
                <CartCheckoutButton style={{ all: "unset" }}>
                  <Small className='white uppercase'>Continue</Small>
                </CartCheckoutButton>
              </CartCheckoutButtonW>
            </CartFooter>
          )}
        </Drawer>
        <BlurOverlay visible={showCart} onClick={() => setShowCart(false)} />
      </StyledCart>
    </>
  );
};

export default Cart;
