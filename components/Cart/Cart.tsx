"use client";

import {
  CartCheckoutButton,
  CartLineProvider,
  useCart,
} from "@shopify/hydrogen-react";
import { useContext, useEffect } from "react";
import { easing } from "../../helpers/animationConfig";
import { colors } from "../../helpers/consts";
import { formatPrice } from "../../helpers/formatPrice";
import BlurOverlay from "../BlurOverlay/BlurOverlay";
import { CursorContext } from "../Cursor/CursorProvider";
import Link from "../Link/Link";
import Burger from "../Navbar/Burger";
import Portal from "../Portal/Portal";
import { RootVideosControllerContext } from "../RootVideosController/RootVideosController";
import Scrollbar from "../Scrollbar/Scrollbar";
import { Large } from "../Typo/Large";
import { Nano } from "../Typo/Nano";
import { Small } from "../Typo/Small";
import CartItem from "./CartItem";
import { CartToggleContext } from "./CartProvider";
import {
  CartCheckoutButtonW,
  CartCloseWrapper,
  CartContent,
  CartFooter,
  CartHeader,
  CartHeaderI,
  CartItemWrapper,
  CartItems,
  Drawer,
  EmptyCart,
  StyledCart,
  TotalPrice,
} from "./Styles/StyledCart";

interface CartProps {}

const Cart = ({}: CartProps) => {
  const { lines, cost } = useCart();
  const { setCursorType } = useContext(CursorContext);
  const { showCart, setShowCart } = useContext(CartToggleContext);
  const { setPauseAllVideos } = useContext(RootVideosControllerContext);

  useEffect(() => {
    setPauseAllVideos(showCart);
  }, [showCart]);

  return (
    <Portal selector='body'>
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
            <CartHeaderI>
              <Large>Cart</Large>
              <Nano className='uppercase'>
                <Link href={"/apparel"} className=''>
                  all products
                </Link>
              </Nano>
            </CartHeaderI>
            <CartCloseWrapper>
              <Burger onClick={() => setShowCart(false)} isOpen />
            </CartCloseWrapper>
          </CartHeader>
          <CartContent>
            {lines.length === 0 ? (
              <EmptyCart>
                <Large>Your cart is empty, like our souls</Large>
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
                <Large>Total</Large>
                <Large>{formatPrice(cost?.totalAmount?.amount)}</Large>
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
    </Portal>
  );
};

export default Cart;
