import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";
import u from "../helpers/unit";
import Image from "next/image";

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
  padding: ${spaces.xxxl}px 0;
  max-width: 600px;
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
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const ProjectGridBlockquote = styled.div`
  grid-area: blockquote;
  padding: ${spaces.xxxl}px 0;
  max-width: 600px;
  ${breakpoint.phone} {
    grid-area: unset;
  }
`;

export const SimilarProjectsSlider = styled.section`
  margin-top: ${spaces.xxxl}px;
`;
