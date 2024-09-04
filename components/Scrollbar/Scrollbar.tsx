import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styled from "styled-components";
import { colors } from "../../helpers/consts";

const StyledScrollbar = styled.div`
  &.green {
    .simplebar-scrollbar::before {
      background-color: ${colors.black};
    }
  }
  &.blue {
    .simplebar-scrollbar::before {
      background-color: ${colors.black};
    }
  }
  .simplebar-wrapper,
  .simplebar-mask,
  [data-simplebar="init"] {
    height: 100% !important;
  }
`;

interface Props {
  children: React.ReactElement;
  applyScrollbar?: boolean;
  theme?: "blue" | "green";
}
const Scrollbar = ({
  children,
  applyScrollbar = true,
  theme = "blue",
}: Props) => {
  return applyScrollbar ? (
    <StyledScrollbar style={{ height: "100%" }} className={theme}>
      <SimpleBar autoHide={false}>{children}</SimpleBar>
    </StyledScrollbar>
  ) : (
    children
  );
};

export default Scrollbar;
