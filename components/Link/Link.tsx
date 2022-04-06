import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  return (
    <StyledLink className={className}>
      <NextLink href={href}>{children}</NextLink>
    </StyledLink>
  );
};

export default Link;
