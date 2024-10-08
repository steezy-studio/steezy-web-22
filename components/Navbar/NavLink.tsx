import { useContext, useEffect, useRef, useState } from "react";
import isTouchDevice from "../../helpers/isTouchDevice";
import { CursorContext } from "../Cursor/CursorProvider";
import {
  NavLinkGif,
  NavLinkGifW,
  NavLinkGifWI,
  NavLinkInner,
  NavlinkChildrenW,
  StyledNavLink,
} from "./Styles/StyledNavLink";

interface NavLinkProps {
  href: string;
  children: string;
  active: boolean;
  cover?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, active, cover, onClick }: NavLinkProps) => {
  const { setCursorType } = useContext(CursorContext);
  const ref = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);
  const coord = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const [hover, sethover] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      gifRef.current.style.top = `${coord.current.x}px`;
      gifRef.current.style.left = `${coord.current.y}px`;
      coord.current = { x: e.clientY, y: e.clientX };
    };
    ref.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledNavLink
      onClick={onClick}
      onMouseEnter={() => {
        if (isTouchDevice()) return;
        setCursorType("hover");
        sethover(true);
      }}
      onMouseLeave={() => {
        if (isTouchDevice()) return;
        setCursorType("normal");
        sethover(false);
      }}
      className={`${active ? `active` : ``} editorial`}
      href={href}
    >
      <NavLinkInner ref={ref}>
        {cover && (
          <NavLinkGifWI ref={gifRef}>
            <NavLinkGifW
              animate={hover ? "hover" : "initial"}
              initial='initial'
              variants={{
                initial: {
                  rotate: 0,
                  scale: 0,
                  opacity: 0,
                },
                hover: {
                  rotate: (Math.random() < 0.5 ? 1 : -1) * 20,
                  scale: 1,
                  opacity: 1,
                },
              }}
              transition={{ duration: 0.2 }}
            >
              <NavLinkGif src={cover} width={200} height={200} alt={children} />
            </NavLinkGifW>
          </NavLinkGifWI>
        )}
        <NavlinkChildrenW>{children}</NavlinkChildrenW>
      </NavLinkInner>
    </StyledNavLink>
  );
};

export default NavLink;
