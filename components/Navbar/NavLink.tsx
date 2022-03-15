import React from "react";
import { StyledNavLink } from "./Styles/StyledNavLink";

interface NavLinkProps {
  highlighted: boolean;
  href: string;
  children: string;
}

const NavLink = ({ highlighted, href, children }: NavLinkProps) => {
  return (
    <StyledNavLink className={highlighted ? `highlighted` : ``} href={href}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
