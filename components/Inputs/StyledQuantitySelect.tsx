import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledQuantitySelect = styled.div`
  width: 100%;
  border-radius: 5px;
  height: 60px;
  border: 1px solid ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityInput = styled.input`
  all: unset;
  display: block;
  width: 100%;
  text-align: center;
  height: 100%;
`;

export const QuantityIconWrapper = styled.div`
  padding: ${spaces.s}px;
  display: flex;
`;
