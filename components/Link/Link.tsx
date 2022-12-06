import React, { useContext } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";
import { HoverProvider } from "../../pages/_app";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  target?: string;
}

const Link = ({ href, children, className, target, ...rest }: LinkProps) => {
  const { setCursorType } = useContext(HoverProvider);

  return target ? (
    <StyledLink
      className={className}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}>
      <a href={href as string} target={target} {...rest}>
        {children}
      </a>
    </StyledLink>
  ) : (
    <StyledLink
      className={className}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}>
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </StyledLink>
  );
};

export default Link;
