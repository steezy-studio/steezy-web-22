import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useContext } from "react";
import { HoverProvider } from "../../pages/_app";
import { LinkBg, StyledLink } from "./Styles/StyledLink";

interface LinkProps extends NextLinkProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  target?: string;
  onClick?: () => void;
}

const Link = ({ href, children, className, onClick, target }: LinkProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledLink
      href={href}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
      target={target}
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
    </StyledLink>
  );
};

export default Link;
