import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "title title" "quantity price";
  row-gap: ${spaces.l}px;
  ${breakpoint.phone} {
    align-items: end;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: ${spaces.m}px;
  align-items: center;
  ${breakpoint.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartItemSize = styled.div`
  /* display: flex; */
`;
