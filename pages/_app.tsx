import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { theme } from "../consts";
import { GlobalStyle } from "../pagestyles/GlobalStyles";
import { useWindowSize } from "../hooks/useWindowSize";

function MyApp({ Component, pageProps }) {
  const { w } = useWindowSize();

  return (
    <ThemeProvider theme={theme(w)}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
