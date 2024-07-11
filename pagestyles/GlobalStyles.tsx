import { createGlobalStyle } from "styled-components";
import { addColorClasses } from "../helpers/colorClasses";
import { breakpoint, colors } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const GlobalStyle = createGlobalStyle`
  html,
  body
  {
    width:100%;
    height:100%;
    background-color:${colors.white};
    font-family: "helvetica-now", Helvetica, Arial, sans-serif;
  }
  main {
    padding: ${spaces.xxxl}px var(--page-side-padding) 0 ${spaces.xxxl}px;
    ${breakpoint.monitor} {
      padding: ${spaces.xxxl}px var(--page-side-padding) 0 ${spaces.xxxxxl}px;
    }
    ${breakpoint.smallNotebook} {
      padding: ${spaces.xxxl}px var(--page-side-padding) 0 ${spaces.xl}px;
    }
    ${breakpoint.tabletPortrait} {
      padding: ${spaces.xxl}px var(--page-side-padding) 0 ${spaces.l}px;
    }
    ${breakpoint.phone} {
      padding: ${spaces.xxl}px var(--page-side-padding) 0 ${spaces.m}px;
    }
  }
  :root {
    --page-side-padding: ${spaces.xxxl}px;
    ${breakpoint.monitor} {
      --page-side-padding: ${spaces.xxxxxl}px;
    }
    ${breakpoint.smallNotebook} {
      --page-side-padding: ${spaces.xl}px;
    }
    ${breakpoint.tabletPortrait} {
      --page-side-padding: ${spaces.l}px;
    }
    ${breakpoint.phone} {
      --page-side-padding: ${spaces.m}px;
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
  /* lenis */
  .lenis {
    height: 100vh;
    overflow-y: auto;
  }
  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }
  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }
  .lenis.lenis-stopped {
    overflow: hidden;
  }
  .lenis.lenis-smooth iframe {
    pointer-events: none;
  }

  /* typography */
  .editorial {
    font-family: "editorial-new", 'Times New Roman', Times, serif;
  }
  .helvetica {
    font-family: "helvetica-now", Helvetica, Arial, sans-serif;
  }
  &.break-lines {
    white-space: pre-wrap;
  }
  &.uppercase {
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  &.difference {
    color: ${colors.white};
    mix-blend-mode: difference;
  }
  &.no-underline {
    text-decoration: none;
  }
  &.wide {
    max-width: unset;
  }
  &.tac {
    text-align: center;
  }
  &.underline {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
  ${addColorClasses()}
`;
