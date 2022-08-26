import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Cursor from "../components/Cursor/Cursor";
import Fixed from "../components/Fixed/Fixed";
import Footer from "../components/Footer/Footer";
import { HeroSocials } from "../components/Hero/Styles/StyledHero";
import Instagram from "../components/Icons/Instagram";
import Vimeo from "../components/Icons/Vimeo";
import Layout from "../components/Layout/Layout";
import { theme } from "../helpers/consts";
import { useWindowSize } from "../hooks/useWindowSize";
import { GlobalStyle } from "../pagestyles/GlobalStyles";
import "../css/fonts.css";

export const HoverProvider = React.createContext(null);

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  const [cursorHover, setCursorHover] = useState(false);
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);

  return (
    <ThemeProvider theme={theme(w)}>
      <GlobalStyle />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: { smooth: true },
        }}
        watch={[asPath, w]}
        containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <Cursor hover={cursorHover} isCursorDisabled={isCursorDisabled} />
          <Layout>
            <HoverProvider.Provider
              value={{ cursorHover, setCursorHover, setIsCursorDisabled }}>
              <Fixed id={"fixed-socials"}>
                <HeroSocials>
                  <Instagram />
                  <Vimeo />
                </HeroSocials>
              </Fixed>
              <Component {...pageProps} />
              <Footer />
            </HoverProvider.Provider>
          </Layout>
        </main>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
