import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledProject = styled.div``;

export const ProjectHeroRoles = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: start;
  flex-shrink: 0;
  grid-gap: 90px;
  ${breakpoint.phone} {
    grid-auto-flow: unset;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
export const ProjectHeroRole = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  ${breakpoint.phone} {
    grid-gap: 5px;
  }
`;

export const ProjectHeroFooter = styled.div`
  display: grid;
  margin-left: auto;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.tabletPortrait} {
    margin-left: 0;
  }
  ${breakpoint.phone} {
    grid-auto-flow: row;
    width: 100%;
    grid-gap: ${({ theme }) => u(2, theme.pageMargin)};
  }
`;

export const ProjectDescription = styled.div`
  padding: ${({ theme }) => u(1, theme.pageMargin)} 0;
  width: ${({ theme }) => u(6, theme.pageMargin)};
  ${breakpoint.tabletLandscape} {
    width: ${({ theme }) => u(9, theme.pageMargin)};
    padding: ${({ theme }) => u(1, theme.pageMargin)} 0
      ${({ theme }) => u(2, theme.pageMargin)};
  }
  ${breakpoint.phone} {
    width: ${({ theme }) => u(14, theme.pageMargin)};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
  ${breakpoint.phone} {
    grid-gap: ${({ theme }) => `calc(${theme.pageMargin})`};
  }
`;

export const ProjectGridRow = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
  ${breakpoint.phone} {
    grid-auto-flow: row;
    grid-gap: ${({ theme }) => `calc(${theme.pageMargin})`};
  }
`;

export const ProjectGridBlockquote = styled.div`
  padding: ${({ theme }) => u(1, theme.pageMargin)}
    ${({ theme }) => u(3, theme.pageMargin)}
    ${({ theme }) => u(1, theme.pageMargin)} 0;
  margin-left: auto;
  ${breakpoint.smallNotebook} {
    padding: ${({ theme }) => u(1, theme.pageMargin)}
      ${({ theme }) => u(2, theme.pageMargin)}
      ${({ theme }) => u(1, theme.pageMargin)} 0;
  }
  ${breakpoint.tabletLandscape} {
    padding: ${({ theme }) => u(1, theme.pageMargin)}
      ${({ theme }) => u(1, theme.pageMargin)}
      ${({ theme }) => u(1, theme.pageMargin)} 0;
  }
  ${breakpoint.tabletPortrait} {
    padding: ${({ theme }) => u(1, theme.pageMargin)}
      ${({ theme }) => u(0, theme.pageMargin)}
      ${({ theme }) => u(1, theme.pageMargin)} 0;
  }
  ${breakpoint.phone} {
    padding: ${({ theme }) => u(2, theme.pageMargin)}
      ${({ theme }) => u(0, theme.pageMargin)}
      ${({ theme }) => u(2, theme.pageMargin, theme.pageMargin)} 0;
  }
`;

export const ClientQuote = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-gap: 0;
  }
`;

export const ClientQuoteLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  &:after {
    content: "“";
    display: block;
    transform: translateY(-0.15em);
    font-weight: 600;
    font-family: "migra-italic";
    font-size: 110px;
    margin-left: 40px;
  }
  ${breakpoint.smallNotebook} {
    &:after {
      font-size: 60px;
    }
  }
  ${breakpoint.phone} {
    flex-direction: column;
    &:after {
      margin-left: 0;
      content: "„";
    }
  }
`;

export const ClientQuoteRight = styled.div`
  max-width: 900px;
  ${breakpoint.largeNotebook} {
    max-width: 600px;
  }
`;

export const NextProjectSection = styled(motion.div)`
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
  position: relative;
  ${breakpoint.smallNotebook} {
  }
  ${breakpoint.phone} {
  }
`;
