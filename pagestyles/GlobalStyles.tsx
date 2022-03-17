import { createGlobalStyle, DefaultTheme } from "styled-components";
import { colors } from "../consts";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "agrandir", Arial, Helvetica, sans-serif;
  } 
  a {
    text-decoration: none;
    &:visited {
      color: ${colors.black}
    }
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
  @font-face {
    font-family: "agrandir";
    src: url("fonts/PPAgrandir-Medium.woff");
    font-family: 500;
  } 
`;
