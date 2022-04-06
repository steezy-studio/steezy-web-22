import styled from "styled-components";
import { ProjectHeroFooter } from "../../../pagestyles/StyledProject";
import { StyledGridItem } from "../../GridItem/Styles/StyledGridItem";
import { HeroMedia } from "../../Hero/Styles/StyledHero";

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
`;
