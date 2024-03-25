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

export const IndexLatestProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${spaces.xl}px;
  margin-bottom: ${spaces.l}px;
`;

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

export const LandingPageHeroLogotype = styled.img`
  height: 40px;
  ${breakpoint.smallNotebook} {
    height: 40px;
  }
  ${breakpoint.phone} {
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
`;

export const IndexQuote = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
`;

export const IndexQuoteClient = styled(motion.div)``;

export const IndexQuotesSlider = styled.section`
  max-width: 1200px;
  margin: ${spaces.xxxl}px 0;
`;
