"use client";

import {
  CartProvider as ShopifyCartProvider,
  ShopifyProvider,
} from "@shopify/hydrogen-react";
import { ReactNode, useContext } from "react";
import { CartToggleContext } from "../../components/Cart/Cart";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const { setShowCart } = useContext(CartToggleContext);
  return (
    <ShopifyProvider
      countryIsoCode='CZ'
      languageIsoCode='EN'
      storeDomain={"https://f93b41-4a.myshopify.com"}
      storefrontApiVersion='2024-01'
      storefrontToken={process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN}
    >
      <ShopifyCartProvider
        onLineAdd={() => {}}
        onLineAddComplete={() => {
          setShowCart(true);
        }}
      >
        {children}
      </ShopifyCartProvider>
    </ShopifyProvider>
  );
};

export default CartProvider;
