import { createGlobalStyle, DefaultTheme } from "styled-components";
import { colors } from "../consts";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  body {
    background-color: ${colors.primary300};
    padding: ${({ theme }) => theme.pageMargin};
    padding-top: 0;
    padding-bottom: 0;
  }
  @font-face {
    font-family: "migra-italic";
    src: url("/fonts/MigraItalic-Italic.woff");
    font-weight: 400;
  }
`;
