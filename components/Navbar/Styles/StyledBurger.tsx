import styled from "styled-components";
import { colors } from "../../../consts";

export const StyledBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  cursor: pointer;
  width: 80px;
  height: 100%;
  flex-shrink: 0;
`;
