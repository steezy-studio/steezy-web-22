import { useContext } from "react";
import { HoverProvider } from "../Cursor/CursorProvider";
import { StyledNavLink } from "./Styles/StyledNavLink";

interface NavLinkProps {
  href: string;
  children: string;
  active: boolean;
  delay?: number;
  iconSrc?: string;
  onClick?: () => void;
}

const NavLink = ({
  href,
  children,
  active,
  delay = 0,
  onClick,
  iconSrc,
}: NavLinkProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledNavLink
      onClick={onClick}
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
      {/* {active && (
        <NavIconW>
          <NavIcon src={iconSrc} />
        </NavIconW>
      )} */}
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
