import styled from "styled-components";
import u from "../../../helpers/unit";
import { ProjectHeroFooter } from "../../../pagestyles/StyledProject";
import { ValuesSection } from "../../../pagestyles/StyledStudio";
import { StyledGridItem } from "../../GridItem/Styles/StyledGridItem";
import { HeroMedia } from "../../Hero/Styles/StyledHero";
import { StyledImageSlider } from "../../ImageSlider/Styles/StyledImageSlider";

export const StyledImg = styled.div`
  ${StyledGridItem} & {
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  ${ProjectHeroFooter} & {
    height: auto;
    min-width: 150px;
    max-width: 200px;
    align-self: flex-start;
  }
  ${HeroMedia} & {
    width: 100%;
  }
  ${ValuesSection} & {
    padding-left: ${({ theme }) => u(1, theme.pageMargin)};
  }
  ${StyledImageSlider} & {
    padding-right: 10px;
  }
`;
