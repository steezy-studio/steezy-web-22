import styled from "styled-components";
import { colors } from "../../consts";
import { LandingpageHeroClients } from "../../pagestyles/StyledIndex";

export const SubHeader = styled.span`
  font-size: 14px;
  line-height: 1.2em;
  color: ${colors.black};
  text-transform: uppercase;
  ${LandingpageHeroClients} & {
    text-align: right;
  }
`;
