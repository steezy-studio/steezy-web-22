import { createGlobalStyle } from "styled-components";
import { colors } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const GlobalStyle = createGlobalStyle`
  html,
  body
  {
    width:100%;
    height:100%;
    background-color:${colors.white};
    font-family: "agrandir", Arial, Helvetica, sans-serif;
  }
  body {
  }
  main {
    padding: ${spaces.xxxl}px ;
      padding-top: ${spaces.xxxl}px ;
      padding-bottom: 0 ;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none !important;
  } 
  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;
