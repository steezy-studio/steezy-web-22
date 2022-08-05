import { useRouter } from "next/router";
import { useState } from "react";
import { allProjects } from "../../helpers/consts";
import strings from "../../data/strings";
import Logo from "../Logo/Logo";
import Burger from "./Burger";
import NavLink from "./NavLink";
import { NavLinks, StyledNavbar } from "./Styles/StyledNavbar";
import Fixed from "../Fixed/Fixed";

interface NavbarProps {
  areas: { highlighted: boolean; link: string; name: string }[];
}

const Navbar = ({ areas = [] }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const router = useRouter();

  return (
    <Fixed id={"fixed-navbar"}>
      <StyledNavbar>
        <Logo />
        <NavLinks
          animate={isMenuOpen ? "open" : "close"}
          initial={false}
          style={{
            transformOrigin: "100% 0%",
            pointerEvents: isMenuOpen ? "all" : "none",
          }}
          transition={{
            duration: 0.2,
            type: "tween",
            ease: [0.65, 0.05, 0.36, 1],
          }}
          variants={{ open: { scaleX: 1 }, close: { scaleX: 0 } }}>
          {[
            strings.navData[0],
            {
              name: allProjects.area_name,
              link: `/projects/${allProjects._slug}`,
              highlighted: true,
            },
            ...areas,
            strings.navData[1],
          ].map(({ highlighted, link, name }) => (
            <NavLink
              active={router.asPath === link}
              highlighted={highlighted}
              href={link}
              key={link}>
              {name}
            </NavLink>
          ))}
        </NavLinks>
        <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
      </StyledNavbar>
    </Fixed>
  );
};

export default Navbar;
