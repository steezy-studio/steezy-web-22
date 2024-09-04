import React from "react";
import { Header, Line, StyledHeaderLine } from "./StyledHeaderLine";

interface HeaderLineProps {
  children?: React.ReactNode;
  className?: string;
  diasbled?: boolean;
}

const HeaderLine = ({ children, className, diasbled }: HeaderLineProps) => {
  if (diasbled) return <>children</>;
  return (
    <StyledHeaderLine className={className}>
      <Header>{children}</Header>
      <Line />
    </StyledHeaderLine>
  );
};

export default HeaderLine;
