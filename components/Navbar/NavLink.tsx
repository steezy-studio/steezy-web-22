import React from "react";
import { StyledNavLink } from "./Styles/StyledNavLink";

interface NavLinkProps {
  highlighted: boolean;
  href: string;
  children: string;
  active: boolean;
}

const NavLink = ({ highlighted, href, children, active }: NavLinkProps) => {
  return (
    <StyledNavLink
      variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
      className={`${highlighted ? `highlighted` : ``} ${
        active ? `active` : ``
      }`}
      href={href}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
