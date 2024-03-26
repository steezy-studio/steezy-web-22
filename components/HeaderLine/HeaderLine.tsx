import React from "react";
import { Header, Line, StyledHeaderLine } from "./StyledHeaderLine";

interface HeaderLineProps {
  children?: React.ReactNode;
  className?: string;
}

const HeaderLine = ({ children, className }: HeaderLineProps) => {
  return (
    <StyledHeaderLine className={className}>
      <Header>{children}</Header>
      <Line />
    </StyledHeaderLine>
  );
};

export default HeaderLine;
