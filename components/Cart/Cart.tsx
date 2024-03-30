"use client";

import {
  CartCheckoutButton,
  CartLineProvider,
  useCart,
} from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
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
import Link from "../Link/Link";
import Burger from "../Navbar/Burger";
import Scrollbar from "../Scrollbar/Scrollbar";
import { Large } from "../Typo/Large";
import CartItem from "./CartItem";
import {
  CartCloseWrapper,
  CartContent,
  CartFooter,
  CartHeader,
  CartItemWrapper,
  CartItems,
  Drawer,
  EmptyCart,
  Overlay,
  StyledCart,
  TotalPrice,
} from "./Styles/StyledCart";
import { DisableScroll } from "../../pagestyles/DisableScroll";

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

  useEffect(() => {
    setShowCart(false);
  }, [pathname]);

  return (
    <>
      {showCart && <DisableScroll />}
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
            <Large className='uppercase black'>Košík</Large>
            <CartCloseWrapper>
              <Burger onClick={() => setShowCart(false)} isOpen />
            </CartCloseWrapper>
          </CartHeader>
          <CartContent>
            {lines.length === 0 ? (
              <EmptyCart>
                <Large className='black'>mrdko</Large>
                <Link href={"/products"} onClick={() => setShowCart(false)}>
                  Přejít na produkty
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
                          {/* {!(lines.length === i + 1) && (
                            <Line stroke='gray500' diagonalSize={20} />
                          )} */}
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
                <Large className='black'>Celkem</Large>
                <Large className='black'>
                  {formatPrice(cost?.totalAmount?.amount)}
                </Large>
              </TotalPrice>
              <Link as={"span"} className='big full-width' href={""}>
                <CartCheckoutButton style={{ all: "unset" }}>
                  pokračovat
                </CartCheckoutButton>
              </Link>
            </CartFooter>
          )}
        </Drawer>
        <AnimatePresence>
          {showCart && (
            <Overlay
              key={"overlay"}
              onClick={() => setShowCart(false)}
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur( 5px )" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </StyledCart>
    </>
  );
};

export default Cart;
