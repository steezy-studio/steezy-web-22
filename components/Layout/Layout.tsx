import styled from "styled-components";

import React from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const StyledLayout = styled.div``;

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
