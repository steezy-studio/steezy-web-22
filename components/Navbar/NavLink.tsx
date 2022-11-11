import React, { useContext } from "react";
import { HoverProvider } from "../../pages/_app";
import { StyledNavLink } from "./Styles/StyledNavLink";

interface NavLinkProps {
  highlighted: boolean;
  href: string;
  children: string;
  active: boolean;
}

const NavLink = ({ highlighted, href, children, active }: NavLinkProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledNavLink
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
      variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
      className={`${highlighted ? `highlighted` : `supressed`} ${
        active ? `active` : ``
      }`}
      href={href}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
