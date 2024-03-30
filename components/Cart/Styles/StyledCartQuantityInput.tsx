"use client";

import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledCartQuantityInput = styled.div`
  display: flex;
`;

export const QuantityField = styled.div`
  font-size: 40px;
  color: ${colors.black};
  border: 1px solid ${colors.black};
  display: inline-block;
  aspect-ratio: 1;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdjustButtons = styled.div``;

export const AdjustButtonWrapper = styled.div`
  display: block;
  aspect-ratio: 1;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.black};
  border-left: unset;
  cursor: pointer;
  &.minus {
    border-top: unset;
  }
  &:hover {
    background-color: ${colors.primary300};
  }
`;
