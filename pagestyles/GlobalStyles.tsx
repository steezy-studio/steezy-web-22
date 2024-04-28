import { createGlobalStyle } from "styled-components";
import { breakpoint, colors } from "../helpers/consts";
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
  main {
    padding: ${spaces.xxxl}px ${spaces.xxxl}px 0 ${spaces.xxxl}px;
    ${breakpoint.monitor} {
      padding: ${spaces.xxxl}px ${spaces.xxxxxl}px 0 ${spaces.xxxxxl}px;
    }
    ${breakpoint.smallNotebook} {
      padding: ${spaces.xxxl}px ${spaces.xl}px 0 ${spaces.xl}px;
    }
    ${breakpoint.tabletPortrait} {
      padding: ${spaces.xxl}px ${spaces.l}px 0 ${spaces.l}px;
    }
    ${breakpoint.phone} {
      padding: ${spaces.xxl}px ${spaces.m}px 0 ${spaces.m}px;
    }
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
