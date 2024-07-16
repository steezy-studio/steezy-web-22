"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledCart = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9;
  pointer-events: none;
  height: 100dvh;
`;

export const Drawer = styled(motion.div)`
  pointer-events: all;
  position: absolute;
  z-index: 2;
  padding: ${spaces.l}px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  row-gap: ${spaces.xxl}px;
  ${breakpoint.monitor} {
    width: 600px;
  }
  ${breakpoint.smallNotebook} {
    width: 500px;
  }
  ${breakpoint.phone} {
    width: 100vw;
    height: 100dvh;
    bottom: unset;
    padding: ${spaces.m}px;
    row-gap: ${spaces.l}px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartHeaderI = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const CartCloseWrapper = styled.div`
  width: 60px;
  div {
    width: 100%;
    height: 100%;
  }
`;

export const CartItemWrapper = styled.div`
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const CartItems = styled.div`
  display: grid;
  row-gap: ${spaces.xl}px;
`;

export const CartContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const EmptyCart = styled.div`
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const CartFooter = styled.div``;

export const CartCheckoutButtonW = styled.div`
  background-color: ${colors.black};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${spaces.m}px;
`;
