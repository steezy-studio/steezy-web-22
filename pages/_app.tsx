import React, { MutableRefObject, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import Cart, { CartToggleProvider } from "../components/Cart/Cart";
import CartProvider from "../components/Cart/CartProvider";
import { CursorTypes } from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarControls from "../components/Navbar/NavbarControls";
import Navlinks from "../components/Navbar/Navlinks";
import PageTransition from "../components/PageTransition/PageTransition";
import "../css/fonts.css";
import { theme } from "../helpers/consts";
import { useGA } from "../hooks/useGA";
import { useWindowSize } from "../hooks/useWindowSize";
import { GlobalStyle } from "../pagestyles/GlobalStyles";

export const HoverProvider = React.createContext<{
  setIsCursorDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypes>>;
  cursorType: CursorTypes;
  cursorRef: MutableRefObject<HTMLDivElement>;
}>(null);

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  useGA();
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorType, setCursorType] = useState<CursorTypes>("normal");
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <CartToggleProvider>
      <CartProvider>
        <NavbarControls>
          <ThemeProvider theme={theme(w)}>
            <GlobalStyle />
            <NavbarControls>
              <HoverProvider.Provider
                value={{
                  setIsCursorDisabled,
                  setCursorType,
                  cursorType,
                  cursorRef,
                }}
              >
                <Navbar />
                <PageTransition>
                  <main>
                    {/* <Cursor
                isCursorDisabled={isCursorDisabled}
                cursorType={cursorType}
                cursorRef={cursorRef}
              /> */}
                    <Navlinks />
                    <Cart />
                    <Component {...pageProps} />
                    <Footer />
                  </main>
                </PageTransition>
              </HoverProvider.Provider>
            </NavbarControls>
          </ThemeProvider>
        </NavbarControls>
      </CartProvider>
    </CartToggleProvider>
  );
}

export default MyApp;
