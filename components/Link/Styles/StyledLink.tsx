import styled from "styled-components";
import { colors } from "../../../consts";
import { SubServicesList } from "../../../pagestyles/StyledStudio";
import { StyledGridItem } from "../../GridItem/Styles/StyledGridItem";
import { Medium } from "../../Typo/Medium";

export const StyledLink = styled.span`
  &,
  a {
    cursor: pointer;
    position: relative;
    font-family: inherit;
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    &:after {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      height: 0.85em;
      top: 0;
      background-color: ${colors.primary400};
      left: 0;
      z-index: -1;
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
    &.active,
    &.active a {
      cursor: default;
      &:after {
        transform: scaleX(1);
      }
    }
    ${StyledGridItem} &, ${SubServicesList} & {
      font-size: 28px;
      font-weight: 300;
      strong {
        font-family: "migra-italic";
        font-weight: 600;
      }
      &:hover {
        &:after {
          transform: unset;
        }
      }
      &:after {
        height: 1.2em;
      }
      &.hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
    ${SubServicesList} & {
      line-height: 1.8em;
    }
    ${Medium} & {
      &:after {
        height: 1.2em;
      }
    }
  }
`;
