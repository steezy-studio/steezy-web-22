import styled from "styled-components";
import { breakpoint, colors } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledStudio = styled.div``;

export const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 25%;
  grid-gap: 60px;
  margin: ${({ theme }) => u(1.5, theme.pageMargin)} 0;
  .header {
    display: grid;
    align-items: start;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 60px;
    padding-right: 60px;
    ${breakpoint.smallNotebook} {
      grid-auto-flow: row;
    }
  }
  ${breakpoint.largeNotebook} {
    grid-template-columns: 50% 30%;
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: 50% 40%;
  }
  ${breakpoint.tabletPortrait} {
    .header {
      grid-gap: 30px;
    }
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    margin: ${({ theme }) => u(3, theme.pageMargin)} 0;
    grid-gap: 20px;
    .header {
      padding-right: unset;
      grid-gap: 20px;
    }
  }
`;

export const ValuesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

export const ValuesInner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  grid-column-gap: 60px;
  ${breakpoint.largeNotebook} {
    grid-column-gap: 30px;
  }
  ${breakpoint.smallNotebook} {
    column-gap: 40px;
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: unset;
    grid-row-gap: 60px;
  }
  ${breakpoint.phone} {
    grid-row-gap: 30px;
  }
`;

export const ValuesList = styled.div`
  display: grid;
  row-gap: ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.phone} {
    row-gap: ${({ theme }) => u(3, theme.pageMargin)};
  }
`;

export const ValueItem = styled.div`
  position: relative;
  padding-left: 140px;
  max-width: 600px;
  ${breakpoint.largeNotebook} {
    padding-left: 100px;
  }
  ${breakpoint.smallNotebook} {
    padding-left: 90px;
  }
  ${breakpoint.phone} {
    padding-left: 0;
  }
`;

export const ValueHeader = styled.div`
  display: grid;
  grid-row-gap: 30px;
  ${breakpoint.phone} {
    grid-row-gap: 10px;
  }
`;

export const Order = styled.span`
  font-size: 100px;
  font-family: "migra-italic";
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${colors.black};
  position: absolute;
  left: 0;
  top: -0.52em;
  ${breakpoint.largeNotebook} {
    font-size: 70px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${breakpoint.phone} {
    position: static;
  }
`;

export const ServicesSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 60px;
  align-items: start;
  width: ${({ theme }) => u(13, theme.pageMargin)};
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
  ${breakpoint.largeNotebook} {
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: unset;
    grid-row-gap: 30px;
    width: 100%;
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${({ theme }) => u(0.5, theme.pageMargin)};
  grid-column-gap: 100px;
  ${breakpoint.tabletPortrait} {
    grid-column-gap: 30px;
    grid-row-gap: ${({ theme }) => u(1, theme.pageMargin)};
  }
  ${breakpoint.phone} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SubServicesList = styled.div`
  margin-top: 30px;
`;

export const BlockquoteSection = styled.section``;

export const Blockquote = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  &._1 {
    margin-top: ${({ theme }) => u(6, theme.pageMargin)};
  }
  &._2 {
    transform: translateY(${({ theme }) => u(-1, theme.pageMargin)});
  }
`;

export const Quote = styled.div`
  white-space: pre-wrap;
  &.offset-y-1 {
    transform: translateY(-40%);
  }
  &.offset-y-2 {
    align-self: end;
    margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
  }
  &.offset-y-3 {
    transform: translateY(40%);
    position: relative;
    z-index: 1;
  }
`;

export const BrandsSection = styled.section`
  display: grid;
  grid-template-columns: 50% 40%;
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0
    ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.tabletLandscape} {
    grid-template-columns: 50% 50%;
    grid-column-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-row-gap: 30px;
  }
`;

export const BrandsText = styled.div`
  display: grid;
  grid-template-columns: auto ${({ theme }) => u(4, theme.pageMargin)};
  align-items: start;
  justify-content: start;
  grid-column-gap: 60px;
  margin-top: 60px;
  ${breakpoint.tabletLandscape} {
    grid-template-columns: unset;
    grid-template-rows: min-content auto;
    grid-row-gap: 30px;
    margin-top: 0;
  }
  ${breakpoint.tabletPortrait} {
    width: ${({ theme }) => u(10, theme.pageMargin)};
  }
`;

export const BrandsTextInner = styled.div`
  display: grid;
  grid-row-gap: 30px;
`;

export const Logotypes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-self: end;
  grid-column-gap: 30px;
  width: 100%;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Outro = styled.div``;
