import React, { useContext } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { LinkBg, StyledLink } from "./Styles/StyledLink";
import { HoverProvider } from "../../pages/_app";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  target?: string;
  onClick?: () => void;
}

const Link = ({
  href,
  children,
  className,
  onClick,
  target,
  ...rest
}: LinkProps) => {
  const { setCursorType } = useContext(HoverProvider);

  return target ? (
    <StyledLink
      className={className}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <a
        href={href as string}
        target={target}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        {...rest}
      >
        {children}
        <LinkBg className={`bg ${className}`} />
      </a>
    </StyledLink>
  ) : (
    <StyledLink
      className={className}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <NextLink
        href={href}
        {...rest}
        className={className}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {children}
        <LinkBg className={`bg ${className}`} />
      </NextLink>
    </StyledLink>
  );
};

export default Link;
