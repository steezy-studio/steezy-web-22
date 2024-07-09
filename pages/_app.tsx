import { ThemeProvider } from "styled-components";
import Cart, { CartToggleProvider } from "../components/Cart/Cart";
import CartProvider from "../components/Cart/CartProvider";
import CursorProvider from "../components/Cursor/CursorProvider";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarControls from "../components/Navbar/NavbarControls";
import Navlinks from "../components/Navbar/Navlinks";
import PageTransition from "../components/PageTransition/PageTransition";
import RootVideosController from "../components/RootVideosController/RootVideosController";
import "../css/fonts.css";
import { theme } from "../helpers/consts";
import { useGA } from "../hooks/useGA";
import { useWindowSize } from "../hooks/useWindowSize";
import LenisContext from "../lib/Lenis";
import { GlobalStyle } from "../pagestyles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  useGA();

  return (
    <CartToggleProvider>
      <CartProvider>
        <NavbarControls>
          <RootVideosController>
            <ThemeProvider theme={theme(w)}>
              <GlobalStyle />
              <CursorProvider>
                <NavbarControls>
                  <Navbar />
                  <PageTransition>
                    <LenisContext>
                      <main>
                        <Navlinks />
                        <Cart />
                        <Component {...pageProps} />
                        <Footer />
                      </main>
                    </LenisContext>
                  </PageTransition>
                </NavbarControls>
              </CursorProvider>
            </ThemeProvider>
          </RootVideosController>
        </NavbarControls>
      </CartProvider>
    </CartToggleProvider>
  );
}

export default MyApp;
