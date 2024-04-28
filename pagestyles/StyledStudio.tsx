import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";
import u from "../helpers/unit";

export const StyledStudio = styled.div``;

export const StudioHero = styled.section`
  display: grid;
  margin-top: ${spaces.xl}px;
  row-gap: ${spaces.xl}px;
  ${breakpoint.phone} {
    margin-top: ${spaces.l}px;
  }
`;

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
  max-width: 600px;
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

export const StudioServices = styled.section``;

export const StudioServicesSectionW = styled.div`
  margin-top: ${spaces.xxxl}px;
`;

export const StudioServiceCover = styled(Image)`
  width: 100%;
  max-height: 80vh;
  height: auto;
  min-height: 600px;
  margin-top: ${spaces.xxl}px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.bRad};
  ${breakpoint.phone} {
  }
`;

export const ValuesCoverW = styled.div`
  position: sticky;
  top: ${spaces.xxxl}px;
  width: 100%;
  align-self: start;
  ${breakpoint.phone} {
    position: static;
    margin-bottom: ${spaces.xl}px;
  }
`;

export const ValuesCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.bRad};
`;

export const OurStudio = styled.div``;

export const OurStudioSliderImg = styled(Image)`
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.bRad};
  ${breakpoint.phone} {
    width: 80vw;
  }
`;

export const ValuesList = styled.div`
  display: grid;
  row-gap: ${spaces.xxl}px;
  ${breakpoint.tabletPortrait} {
    row-gap: ${spaces.m}px;
  }
  ${breakpoint.phone} {
    row-gap: ${spaces.l}px;
  }
`;

export const BrandsSection = styled.section`
  display: grid;
  grid-template-columns: 350px 1fr;
  margin-top: ${spaces.xxxxl}px;
  align-items: start;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: ${spaces.l}px;
  }
`;

export const BrandsHeader = styled.div`
  margin-top: 2.7em;
`;

export const Logotypes = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  width: 100%;
  ${breakpoint.tabletPortrait} {
  }
  ${breakpoint.phone} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Logo = styled(motion.img)`
  width: 100%;
  max-width: 120px;
  ${breakpoint.phone} {
    &:nth-child(n + 16) {
      display: none;
    }
  }
`;
