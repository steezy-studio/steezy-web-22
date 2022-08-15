import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { theme } from "../helpers/consts";
import { GlobalStyle } from "../pagestyles/GlobalStyles";
import { useWindowSize } from "../hooks/useWindowSize";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import Fixed from "../components/Fixed/Fixed";
import { HeroSocials } from "../components/Hero/Styles/StyledHero";
import Instagram from "../components/Icons/Instagram";
import Vimeo from "../components/Icons/Vimeo";
import { useMouseCoordinates } from "../hooks/useMouseCoordinates";
import Cursor from "../components/Cursor/Cursor";

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[asPath]}
      containerRef={containerRef}>
      <ThemeProvider theme={theme(w)}>
        <Cursor />
        <GlobalStyle />
        <main data-scroll-container ref={containerRef}>
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
        </main>
      </ThemeProvider>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
