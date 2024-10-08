import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledValueItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr;
  column-gap: ${spaces.l}px;
  padding: ${spaces.xxl}px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: 230px 1fr;
    padding: ${spaces.xl}px 0;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    padding: ${spaces.m}px 0;
    row-gap: 30px;
  }
  ${breakpoint.phone} {
    width: 80%;
    padding: ${spaces.l}px 0;
  }
`;

export const ValueBody = styled.div`
  position: relative;
  padding-left: 140px;
  max-width: 800px;
  ${breakpoint.largeNotebook} {
    max-width: 600px;
    padding-left: 100px;
  }
  ${breakpoint.smallNotebook} {
    padding-left: 0;
  }
  ${breakpoint.phone} {
  }
`;

export const ValueHeader = styled.div`
  display: grid;
  grid-row-gap: 30px;
  ${breakpoint.smallNotebook} {
    row-gap: ${spaces.s}px;
  }
  ${breakpoint.phone} {
    grid-row-gap: ${spaces.xs}px;
  }
`;

export const Order = styled.span`
  font-size: 80px;
  font-family: "editorial-new";
  letter-spacing: 0.02em;
  color: ${colors.black};
  position: absolute;
  left: 0;
  top: -0.52em;
  ${breakpoint.largeNotebook} {
    font-size: 60px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 50px;
    position: relative;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 50px;
  }
  ${breakpoint.tabletPortrait} {
    position: static;
  }
`;
