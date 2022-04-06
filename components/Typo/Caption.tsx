import styled from "styled-components";
import { colors } from "../../consts";
import { LandingpageHeroClients } from "../../pagestyles/StyledIndex";
import { DetailedContact, StyledFooter } from "../Footer/Styles/StyledFooter";
import { GridItemAreas } from "../GridItem/Styles/StyledGridItem";
import { StyledHero } from "../Hero/Styles/StyledHero";

export const Caption = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.2em;
  color: ${colors.black};
  text-transform: uppercase;
  &.lowcase {
    text-transform: none;
    letter-spacing: 0.04em;
    line-height: 1.8em;
  }
  ${StyledHero} & {
    white-space: pre-wrap;
  }
  ${LandingpageHeroClients} & {
    text-align: right;
  }
  ${GridItemAreas} & {
    letter-spacing: 0.02em;
    &:not(:last-child) {
      &:after {
        content: "\u2002\u2022\u2002";
      }
    }
  }
  ${StyledFooter} & {
    display: block;
    white-space: pre-wrap;
  }
  ${DetailedContact} & {
  }
`;
