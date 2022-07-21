import styled from "styled-components";
import { breakpoint } from "../../../consts";
import u from "../../../helpers/unit";
import { StyledContact } from "../../../pagestyles/StyledContact";

export const StyledHero = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.pageMargin} 0;
  position: relative;
  display: flex;
  flex-direction: column;
  ${breakpoint.tabletLandscape} {
    min-height: unset;
    /* min-height: 90vh; */
  }
`;

export const HeroSocials = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  position: fixed;
  z-index: 99;
  bottom: ${({ theme }) => theme.pageMargin};
  ${breakpoint.largeNotebook} {
    grid-gap: 10px;
  }
  ${breakpoint.tabletLandscape} {
    display: none;
  }
`;

export const HeroText = styled.div`
  * {
    pointer-events: all;
  }
  width: ${({ theme }) => u(6, theme.pageMargin)};
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  z-index: 1;
  display: grid;
  grid-row-gap: 30px;
  .perex {
    max-width: 300px;
  }
  ${StyledContact} & {
    width: ${({ theme }) => u(10, theme.pageMargin)};
  }
  ${breakpoint.largeNotebook} {
    width: ${({ theme }) => u(7, theme.pageMargin)};
  }
  ${breakpoint.smallNotebook} {
    width: ${({ theme }) => u(5, theme.pageMargin)};
  }
  ${breakpoint.tabletLandscape} {
    top: 50%;
  }
`;

export const HeroMedia = styled.div`
  width: ${({ theme }) => u(13, theme.pageMargin)};
  margin-left: auto;
  ${StyledContact} & {
    /* width: ${({ theme }) => u(12, theme.pageMargin)};
    justify-content: flex-end; */
  }
  ${breakpoint.tabletLandscape} {
    /* width: ${({ theme }) => u(16, theme.pageMargin)};
    position: static; */
  }
`;

export const HeroFooterChildren = styled.div`
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  width: 100%;
  ${StyledContact} & {
    position: absolute;
    top: ${({ theme }) => u(1, theme.pageMargin)};
    left: ${({ theme }) => u(4, theme.pageMargin, theme.pageMargin)};
    width: ${({ theme }) => u(4, theme.pageMargin)};
    ${breakpoint.largeNotebook} {
      width: ${({ theme }) => u(5, theme.pageMargin)};
    }
  }
  ${breakpoint.tabletLandscape} {
    /* margin-top: ${({ theme }) => u(1, theme.pageMargin)}; */
    /* margin-top: 30px; */
  }
`;
