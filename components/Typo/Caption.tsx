import styled from "styled-components";
import { colors } from "../../consts";
import { LandingpageHeroClients } from "../../pagestyles/StyledIndex";
import { GridItemAreas } from "../GridItem/Styles/StyledGridItem";

export const Caption = styled.span`
  font-size: 14px;
  line-height: 1.2em;
  color: ${colors.black};
  text-transform: uppercase;
  ${LandingpageHeroClients} & {
    text-align: right;
  }
  ${GridItemAreas} & {
    &:not(:last-child) {
      &:after {
        content: "\u2002\u2022\u2002";
      }
    }
  }
`;
