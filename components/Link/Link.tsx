import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[];
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <StyledLink>
      <NextLink href={href}>{children}</NextLink>
    </StyledLink>
  );
};

export default Link;
