import React, { useState } from "react";
import strings from "../../data/strings";
import Logo from "../Logo/Logo";
import Burger from "./Burger";
import NavLink from "./NavLink";
import { NavLinks, StyledNavbar } from "./Styles/StyledNavbar";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);

  return (
    <StyledNavbar>
      <Logo />
      <NavLinks
        animate={isMenuOpen ? "open" : "close"}
        initial={false}
        style={{ transformOrigin: "100% 0%" }}
        transition={{
          duration: 0.2,
          type: "tween",
          ease: [0.65, 0.05, 0.36, 1],
        }}
        variants={{ open: { scaleX: 1 }, close: { scaleX: 0 } }}>
        {strings.navData.map(({ highlighted, link, name }) => (
          <NavLink highlighted={highlighted} href={link} key={link}>
            {name}
          </NavLink>
        ))}
      </NavLinks>
      <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
    </StyledNavbar>
  );
};

export default Navbar;
