"use client";

import styled from "styled-components";
import { colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledCartQuantityInput = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  column-gap: ${spaces.xs}px;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid ${colors.black};
  padding: ${spaces.xs}px ${spaces.xs}px;
`;

export const QuantityField = styled.div`
  display: inline-block;
  aspect-ratio: 1;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdjustButtons = styled.div`
  border-left: 1px solid ${colors.black};
`;

export const AdjustButtonWrapper = styled.div`
  display: block;
  aspect-ratio: 1;
  padding: ${spaces.xxs}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: unset;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${colors.primary400};
  }
`;
