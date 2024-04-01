"use client";

import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledCartQuantityInput = styled.div`
  display: flex;
  overflow: hidden;
  width: fit-content;
  border-radius: 5px;
  border: 1px solid ${colors.black};
`;

export const QuantityField = styled.div`
  font-size: 40px;
  font-family: "migra-italic", Arial, Helvetica, sans-serif;
  color: ${colors.black};
  display: inline-block;
  aspect-ratio: 1;
  width: 70px;
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
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: unset;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary400};
  }
`;
