import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const StyledProject = styled.div`
  margin-top: ${spaces.xl}px;
`;

export const ProjectHeroHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: ${spaces.xl}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

export const ProjectHeroRoles = styled.div`
  display: grid;
  align-content: start;
  row-gap: ${spaces.xl}px;
  ${breakpoint.smallNotebook} {
    row-gap: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${spaces.m}px;
    margin-top: ${spaces.l}px;
  }
`;

export const ProjectHeroRole = styled.div`
  display: grid;
  align-content: start;
  row-gap: ${spaces.s}px;
  ${breakpoint.tabletLandscape} {
    row-gap: ${spaces.xxs}px;
  }
`;

export const ProjectDescription = styled.div`
  padding: ${spaces.xxxl}px 0;
  max-width: 600px;
  ${breakpoint.tabletLandscape} {
    padding: ${spaces.xxl}px 0;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const ProjectDetailQuote = styled.section`
  margin: ${spaces.xxxxl}px 0;
`;

export const ProjectGridRow = styled(motion.div)`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  column-gap: ${spaces.xs}px;
  row-gap: ${spaces.xs}px;
  &.blockquote {
    grid-template-areas: ". blockquote";
    &.reverse {
      grid-template-areas: "blockquote .";
    }
  }
  ${breakpoint.phone} {
    grid-auto-flow: row;
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

export const ProjectDetailImg = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const ProjectGridBlockquote = styled.blockquote`
  grid-area: blockquote;
  padding: ${spaces.xxxl}px 0;
  max-width: 600px;
  ${breakpoint.phone} {
    grid-area: unset;
  }
`;

export const SimilarProjectsSlider = styled.section`
  margin: ${spaces.xxxl}px 0;
`;
