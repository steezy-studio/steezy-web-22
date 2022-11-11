import { useRouter } from "next/router";
import React, { MutableRefObject, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Cursor, { CursorTypes } from "../components/Cursor/Cursor";
import Fixed from "../components/Fixed/Fixed";
import Footer from "../components/Footer/Footer";
import { HeroSocials } from "../components/Hero/Styles/StyledHero";
import Instagram from "../components/Icons/Instagram";
import Vimeo from "../components/Icons/Vimeo";
import Layout from "../components/Layout/Layout";
import { device, theme } from "../helpers/consts";
import { useWindowSize } from "../hooks/useWindowSize";
import { GlobalStyle } from "../pagestyles/GlobalStyles";
import "../css/fonts.css";
import { useGA } from "../hooks/useGA";
import CookiesConsent from "../components/CookiesConsent/CookiesConsent";
import NoSSR from "../components/NoSSR/NoSSR";

export const HoverProvider = React.createContext<{
  setIsCursorDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypes>>;
  cursorType: CursorTypes;
  cursorRef: MutableRefObject<HTMLDivElement>;
}>(null);

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  const { asPath, basePath, pathname } = useRouter();
  useGA();
  const containerRef = useRef(null);
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorType, setCursorType] = useState<CursorTypes>("normal");
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme(w)}>
      <GlobalStyle />
      <LocomotiveScrollProvider
        options={{
          smooth: pathname !== "/project/[projectSlug]",
          tablet: {
            smooth: pathname !== "/project/[projectSlug]",
            breakpoint: device.phone,
          },
          smartphone: { smooth: false },
        }}
        watch={[asPath, w]}
        containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
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
            }}>
            {/* <NoSSR>
              <CookiesConsent />
            </NoSSR> */}
            <Layout>
              <Fixed id={"fixed-socials"}>
                <HeroSocials>
                  <Instagram />
                  <Vimeo />
                </HeroSocials>
              </Fixed>
              <Component {...pageProps} />
              <Footer />
            </Layout>
          </HoverProvider.Provider>
        </main>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
