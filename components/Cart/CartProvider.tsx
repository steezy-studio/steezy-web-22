"use client";

import {
  CartProvider as ShopifyCartProvider,
  ShopifyProvider,
} from "@shopify/hydrogen-react";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface CartProviderProps {
  children: ReactNode;
}

export const CartToggleContext = createContext<{
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}>(null);

const CartProvider = ({ children }: CartProviderProps) => {
  const [showCart, setShowCart] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowCart(false);
  }, [pathname]);

  return (
    <CartToggleContext.Provider value={{ setShowCart, showCart }}>
      <ShopifyProvider
        countryIsoCode='CZ'
        languageIsoCode='EN'
        storeDomain={"https://f93b41-4a.myshopify.com"}
        storefrontApiVersion='2024-01'
        storefrontToken={process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN}
      >
        <ShopifyCartProvider
          onLineAdd={() => {
            setShowCart(true);
          }}
          onLineAddComplete={() => {
            setShowCart(true);
          }}
        >
          {children}
        </ShopifyCartProvider>
      </ShopifyProvider>
    </CartToggleContext.Provider>
  );
};

export default CartProvider;
