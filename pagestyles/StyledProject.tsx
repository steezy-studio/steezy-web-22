import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";
import u from "../helpers/unit";

export const StyledProject = styled.div``;

export const ProjectHeroHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: ${spaces.xl}px;
`;

export const ProjectHeroRoles = styled.div`
  display: grid;
  align-content: start;
  row-gap: ${spaces.xl}px;
`;

export const ProjectHeroRole = styled.div`
  display: grid;
  align-content: start;
  row-gap: ${spaces.s}px;
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
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
  &.blockquote {
    grid-template-areas: ". blockquote";
    &.reverse {
      grid-template-areas: "blockquote .";
    }
  }
  ${breakpoint.phone} {
    grid-auto-flow: row;
    grid-gap: ${({ theme }) => `calc(${theme.pageMargin})`};
    ${breakpoint.phone} {
      &.blockquote {
        grid-template-areas: unset;
        &.reverse {
          grid-template-areas: unset;
        }
      }
    }
  }
`;

export const ProjectGridBlockquote = styled.div`
  grid-area: blockquote;
  padding: ${({ theme }) => u(1, theme.pageMargin)} 0;
  ${breakpoint.phone} {
    padding: ${({ theme }) => u(2, theme.pageMargin)} 0;
    grid-area: unset;
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
  ${breakpoint.tabletPortrait} {
    padding-right: ${({ theme }) => theme.pageMargin};
  }
`;

export const NextProjectSection = styled(motion.div)`
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
`;

export const NextProjectHead = styled.div`
  display: grid;
  grid-template-areas: "relatedProject backToProjects";
  margin-bottom: 60px;
  ${breakpoint.phone} {
    grid-template-areas: "backToProjects" "relatedProject";
    row-gap: 40px;
    margin-bottom: 20px;
  }
`;
