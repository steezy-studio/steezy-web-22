import React, { useContext } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";
import { HoverProvider } from "../../pages/_app";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  const { setCursorHover } = useContext(HoverProvider);

  return (
    <StyledLink
      className={className}
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}>
      <NextLink href={href}>{children}</NextLink>
    </StyledLink>
  );
};

export default Link;
