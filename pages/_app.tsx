import React, { MutableRefObject, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import Cursor, { CursorTypes } from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import "../css/fonts.css";
import { theme } from "../helpers/consts";
import { useGA } from "../hooks/useGA";
import { useWindowSize } from "../hooks/useWindowSize";
import { GlobalStyle } from "../pagestyles/GlobalStyles";
import Cart, { CartToggleProvider } from "../components/Cart/Cart";
import CartProvider from "../components/Cart/CartProvider";

export const HoverProvider = React.createContext<{
  setIsCursorDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypes>>;
  cursorType: CursorTypes;
  cursorRef: MutableRefObject<HTMLDivElement>;
}>(null);

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  useGA();
  const containerRef = useRef(null);
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorType, setCursorType] = useState<CursorTypes>("normal");
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <CartToggleProvider>
      <CartProvider>
        <ThemeProvider theme={theme(w)}>
          <GlobalStyle />
          <main ref={containerRef}>
            <Cursor
              isCursorDisabled={isCursorDisabled}
              cursorType={cursorType}
              cursorRef={cursorRef}
            />
            <HoverProvider.Provider
              value={{
                setIsCursorDisabled,
                setCursorType,
                cursorType,
                cursorRef,
              }}
            >
              <Layout>
                <Cart />
                <Component {...pageProps} />
                <Footer />
              </Layout>
            </HoverProvider.Provider>
          </main>
        </ThemeProvider>
      </CartProvider>
    </CartToggleProvider>
  );
}

export default MyApp;
