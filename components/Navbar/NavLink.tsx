import React, { useContext } from "react";
import { HoverProvider } from "../../pages/_app";
import { StyledNavLink } from "./Styles/StyledNavLink";

interface NavLinkProps {
  href: string;
  children: string;
  active: boolean;
  delay?: number;
}

const NavLink = ({ href, children, active, delay = 0 }: NavLinkProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledNavLink
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      transition={{ delay: delay }}
      className={`${active ? `active` : ``}`}
      href={href}
    >
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
