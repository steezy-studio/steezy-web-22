"use client";
import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const SScrollTopButton = styled.div`
  position: fixed;
  padding: ${spaces.xs}px;
  right: calc(var(--page-side-padding) / 2);
  bottom: ${spaces.m}px;
  background-color: transparent;
  border: 1px solid ${colors.black};
  width: 50px;
  height: 50px;
  border-radius: 999px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateX(50%) scale(0);
  transform-origin: 50% 50%;
  color: ${colors.black};
  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
  &.visible {
    pointer-events: all;
    opacity: 1;
    transform: translateX(50%) scale(1);
  }
`;
