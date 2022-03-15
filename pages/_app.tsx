import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { theme } from "../consts";
import { GlobalStyle } from "../pagestyles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
