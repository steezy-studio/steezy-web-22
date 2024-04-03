import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import { spaces } from "../helpers/spaces";

export const StyledIndex = styled.div``;

export const IndexHeroSection = styled.section``;

export const IndexLatestProjects = styled.section`
  margin-top: ${spaces.xxl}px;
`;

export const IndexSliderW = styled.div``;

export const LandingHeroPageLogotypes = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 30px;
  ${breakpoint.smallNotebook} {
    grid-gap: 20px;
  }
  ${breakpoint.phone} {
    grid-gap: 15px;
  }
`;

export const IndexGrid = styled.div``;

export const LandingPageHeroLogotype = styled.img`
  height: 40px;
  ${breakpoint.tabletLandscape} {
    height: 35px;
  }
  ${breakpoint.tabletPortrait} {
    height: 30px;
  }
  ${breakpoint.miniPhone} {
    height: 25px;
  }
`;

export const HeroFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${spaces.xl}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
    align-items: start;
    row-gap: ${spaces.l}px;
  }
`;

export const IndexQuote = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
`;

export const IndexQuoteClient = styled.div`
  overflow: hidden;
`;

export const IndexQuotesSlider = styled(motion.section)`
  max-width: 1500px;
  margin: ${spaces.xxxxl}px 0;
  ${breakpoint.tabletPortrait} {
    margin: ${spaces.xxl}px 0;
  }
`;

export const FeaturedGrid = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    row-gap: ${spaces.m}px;
  }
`;

export const IndexApparel = styled.section`
  margin-top: ${spaces.xxxxl}px;
  ${breakpoint.tabletLandscape} {
    margin-top: ${spaces.xxl}px;
  }
`;

export const IndexApparelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spaces.s}px;
  margin-top: ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    gap: ${spaces.xs}px;
    > :nth-child(4) {
      display: none;
    }
  }
`;

export const IndexServices = styled.section`
  margin-top: ${spaces.xxxxl}px;
`;
