import Script from "next/script";
import { ThemeProvider } from "styled-components";
import Cart from "../components/Cart/Cart";
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
import { GTM_ID, useGTM } from "../hooks/useGTM";
import { useWindowSize } from "../hooks/useWindowSize";
import LenisContext from "../lib/Lenis";
import { GlobalStyle } from "../pagestyles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  useGTM();

  return (
    <CartProvider>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
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
  );
}

export default MyApp;
