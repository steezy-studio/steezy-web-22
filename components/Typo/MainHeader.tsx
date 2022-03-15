import styled from "styled-components";
import { colors } from "../../consts";
import u from "../../helpers/unit";
import { HeroContent } from "../Hero/Styles/StyledHero";

export const MainHeader = styled.h1`
  font-family: "migra-italic", Arial, Helvetica, sans-serif;
  font-size: 110px;
  line-height: 1em;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: ${colors.black};
  ${HeroContent} & {
    margin-top: ${({ theme }) => u(0.75, theme.pageMargin)};
  }
`;
