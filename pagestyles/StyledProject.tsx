import Vimeo from "@u-wave/react-vimeo";
import styled from "styled-components";
import { breakpoint } from "../consts";
import u from "../helpers/unit";

export const StyledProject = styled.div``;

export const ProjectHeroRoles = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: start;
  flex-shrink: 0;
  grid-gap: 90px;
`;
export const ProjectHeroRole = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
`;

export const ProjectHeroFooter = styled.div`
  display: grid;
  margin-left: auto;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => u(1, theme.pageMargin)};
`;

export const ProjectDescription = styled.div`
  padding: ${({ theme }) => u(1, theme.pageMargin)} 0;
  width: ${({ theme }) => u(6, theme.pageMargin)};
  ${breakpoint.tabletLandscape} {
    width: ${({ theme }) => u(9, theme.pageMargin)};
    padding: ${({ theme }) => u(1, theme.pageMargin)} 0
      ${({ theme }) => u(2, theme.pageMargin)};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
`;

export const ProjectGridRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: ${({ theme }) => `calc(${theme.pageMargin} / 2)`};
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
`;

export const ProjectGridVimeo = styled(Vimeo)`
  width: 100%;
  height: 100%;
`;

export const ClientQuote = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
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
    ${breakpoint.smallNotebook} {
      font-size: 60px;
    }
  }
`;

export const ClientQuoteRight = styled.div`
  max-width: 900px;
  ${breakpoint.largeNotebook} {
    max-width: 600px;
  }
`;

export const NextProjectSection = styled.div`
  display: grid;
  grid-row-gap: 60px;
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
  position: relative;
  .back-link {
    position: absolute;
    bottom: -0.2em;
    right: 0;
  }
  ${breakpoint.smallNotebook} {
    grid-row-gap: 30px;
    .back-link {
      /* bottom: 0px; */
    }
  }
`;
