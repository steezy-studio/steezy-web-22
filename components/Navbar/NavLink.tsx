import { useContext, useState } from "react";
import { easing } from "../../helpers/animationConfig";
import { HoverProvider } from "../Cursor/CursorProvider";
import {
  NavLinkArrow,
  NavLinkInner,
  StyledNavLink,
} from "./Styles/StyledNavLink";

interface NavLinkProps {
  href: string;
  children: string;
  active: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, active, onClick }: NavLinkProps) => {
  const { setCursorType } = useContext(HoverProvider);
  const [hover, sethover] = useState<boolean>(false);
  return (
    <StyledNavLink
      onClick={onClick}
      onMouseEnter={() => {
        setCursorType("hover");
        sethover(true);
      }}
      onMouseLeave={() => {
        setCursorType("normal");
        sethover(false);
      }}
      className={`${active ? `active` : ``} editorial`}
      href={href}
    >
      <NavLinkInner
        animate={{ x: !active && hover ? "0em" : "-1em" }}
        transition={{ ease: easing }}
      >
        <NavLinkArrow>{"\u2192\u00a0"}</NavLinkArrow>
        {children}
      </NavLinkInner>
    </StyledNavLink>
  );
};

export default NavLink;
