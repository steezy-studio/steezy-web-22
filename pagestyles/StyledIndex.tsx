import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledIndex = styled.div``;

export const LandingHeroPageLogotypes = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 30px;
  ${breakpoint.smallNotebook} {
    grid-gap: 20px;
  }
  ${breakpoint.phone} {
    grid-gap: 10px;
  }
`;

export const LandingPageHeroLogotype = styled.img`
  height: 40px;
  ${breakpoint.smallNotebook} {
    height: 40px;
  }
  ${breakpoint.phone} {
    height: 25px;
  }
`;

export const LandingpageHeroClients = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 40px;
  justify-content: end;
  ${breakpoint.smallNotebook} {
    grid-row-gap: 30px;
  }
  ${breakpoint.tabletLandscape} {
    grid-row-gap: 10px;
    justify-content: end;
  }
  ${breakpoint.tabletPortrait} {
    justify-content: start;
  }
  ${breakpoint.phone} {
    justify-content: start;
  }
`;

export const LandingpageGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => `calc(4 * ${theme.pageMargin})`};
  ${breakpoint.phone} {
    grid-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
    margin-top: ${({ theme }) => u(3, theme.pageMargin)};
  }
`;

export const LandingpageGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  }
`;

export const GridItemWrapper = styled.div`
  width: 100%;
  &.single {
    width: 75%;
    grid-column: 1/3;
    justify-self: end;
  }
  &.offset:not(:last-child) {
    margin-top: 40%;
  }
  ${breakpoint.phone} {
    &.single {
      width: 100%;
      grid-column: 1;
      justify-self: initial;
    }
    &.offset:not(:last-child) {
      margin-top: unset;
    }
  }
`;

export const Intro = styled.div`
  width: ${({ theme }) => u(6, theme.pageMargin)};
  margin-left: ${({ theme }) => u(4, theme.pageMargin)};
  transform: translateY(${({ theme }) => u(2, theme.pageMargin)});
  position: relative;
  z-index: 2;
  display: grid;
  grid-gap: 60px;
  ${breakpoint.tabletLandscape} {
    margin-left: ${({ theme }) => u(3, theme.pageMargin)};
    /* transform: unset; */
  }
  ${breakpoint.tabletPortrait} {
    display: none;
    margin-left: unset;
    width: ${({ theme }) => u(8, theme.pageMargin)};
  }
  ${breakpoint.phone} {
    transform: unset;
    grid-gap: 30px;
    margin: ${({ theme }) => u(3, theme.pageMargin)} 0;
  }
`;
