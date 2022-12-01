import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledStudio = styled.div``;

export const TextBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.pageMargin};
  margin: ${({ theme }) => u(1.5, theme.pageMargin)} 0;
  ${breakpoint.largeNotebook} {
    grid-template-columns: 5fr 3fr;
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr 1fr;
    align-items: end;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    width: 80%;
    margin: ${({ theme }) => u(3, theme.pageMargin)} 0;
    grid-gap: 20px;
  }
`;
export const TextBlockHeader = styled.div`
  display: grid;
  align-items: start;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-gap: 60px;
  padding-right: 60px;
  ${breakpoint.smallNotebook} {
    grid-auto-flow: row;
  }
  ${breakpoint.tabletPortrait} {
    grid-gap: 30px;
  }
  ${breakpoint.phone} {
    padding-right: unset;
    grid-gap: 20px;
  }
`;
export const TextBlockBody = styled.div`
  max-width: 800px;
  ${breakpoint.largeNotebook} {
    max-width: 500px;
  }
`;
export const ValuesSection = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: ${({ theme }) => u(1, theme.pageMargin)};
  justify-content: start;
  justify-items: start;
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
  ${breakpoint.largeNotebook} {
    margin: ${({ theme }) => u(3, theme.pageMargin)} 0;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 2fr 2fr;
  }
  ${breakpoint.phone} {
    display: flex;
    flex-direction: column-reverse;
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
    grid-row-gap: 20px;
  }
`;

export const ValuesCover = styled.div`
  position: sticky;
  align-self: start;
  ${breakpoint.phone} {
    position: static;
    margin-bottom: ${({ theme }) => u(3, theme.pageMargin)};
  }
`;

export const ValuesCoverInner = styled.div``;

export const ValuesList = styled.div`
  display: grid;
  row-gap: ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.phone} {
    row-gap: ${({ theme }) => u(3, theme.pageMargin)};
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
  ${breakpoint.phone} {
    margin: ${({ theme }) => u(3, theme.pageMargin)} 0;
  }
`;

export const HeaderWithDashOffset = styled.div`
  margin-top: 0.6em;
  ${breakpoint.smallNotebook} {
    margin-top: 0.4em;
  }
  ${breakpoint.tabletLandscape} {
    margin-top: unset;
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
    grid-row-gap: ${({ theme }) => u(2, theme.pageMargin)};
  }
`;

export const SubServicesList = styled.div`
  margin-top: 30px;
  ${breakpoint.phone} {
    margin-top: 10px;
  }
`;

export const BlockquoteSection = styled.section``;

export const Blockquote = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  &._1 {
    margin-top: ${({ theme }) => u(3, theme.pageMargin)};
    ${breakpoint.largeNotebook} {
      margin-top: ${({ theme }) => u(4, theme.pageMargin)};
    }
    ${breakpoint.phone} {
      grid-template-rows: auto;
      grid-template-areas: "quote" "image";
      grid-gap: 40px;
    }
  }
  &._2 {
    transform: translateY(${({ theme }) => u(-1, theme.pageMargin)});
  }
  &.landingpage {
    transform: translate(
      ${({ theme }) => u(-1, theme.pageMargin)},
      ${({ theme }) => u(1.5, theme.pageMargin)}
    );
    position: relative;
    z-index: 1;
  }
  ${breakpoint.tabletPortrait} {
    &._3 {
      margin-top: ${({ theme }) => u(2, theme.pageMargin)};
    }
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    &._2 {
      grid-template-rows: auto;
      grid-template-areas: "image" "quote";
      transform: unset;
      margin-top: 60px;
      display: none;
    }
    &._1 {
      /* margin-top: 0; */
      margin-bottom: ${({ theme }) => u(4, theme.pageMargin)};
    }
  }
`;

export const Quote = styled(motion.div)`
  white-space: pre-wrap;
  position: relative;
  z-index: 2;
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
  ${breakpoint.phone} {
    &.offset-y-1 {
      transform: unset;
      grid-area: quote;
    }
    &.offset-y-2 {
      transform: unset;
      grid-area: quote;
    }
    &.offset-y-3 {
      transform: unset;
      margin-bottom: 30px;
    }
  }
`;

export const BrandsSection = styled.section`
  display: grid;
  grid-template-columns: 5fr 4fr;
  margin: ${({ theme }) => u(1, theme.pageMargin)} 0
    ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.largeNotebook} {
    margin: ${({ theme }) => u(2, theme.pageMargin)} 0
      ${({ theme }) => u(1, theme.pageMargin)};
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-row-gap: 20px;
  }
`;

export const BrandsText = styled(motion.div)`
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
  ${breakpoint.phone} {
    width: ${({ theme }) => u(15, theme.pageMargin)};
    grid-row-gap: 20px;
  }
`;

export const BrandsTextInner = styled.div`
  display: grid;
  grid-row-gap: 30px;
  ${breakpoint.phone} {
    grid-row-gap: 20px;
  }
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
  ${breakpoint.phone} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Logo = styled(motion.img)`
  width: 100%;
  max-width: 150px;
  ${breakpoint.phone} {
    &:nth-child(n + 16) {
      display: none;
    }
  }
`;

export const Outro = styled.div`
  ${breakpoint.phone} {
    margin-top: ${({ theme }) => u(2, theme.pageMargin)};
    display: flex;
    // TODO refactor to grid
    gap: ${({ theme }) => u(1, theme.pageMargin)};
    flex-direction: column-reverse;
  }
`;
