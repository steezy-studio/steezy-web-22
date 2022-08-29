import { useRouter } from "next/router";
import { useState } from "react";
import { allProjects } from "../../helpers/consts";
import strings from "../../data/strings";
import Logo from "../Logo/Logo";
import Burger from "./Burger";
import NavLink from "./NavLink";
import {
  ContactUs,
  NavLinks,
  PhoneDecoration,
  StyledNavbar,
} from "./Styles/StyledNavbar";
import Fixed from "../Fixed/Fixed";
import { StyledImg } from "../Img/Styles/StyledImg";
import Contact from "../../pages/contact";
import { Small } from "../Typo/Small";
import { HeroSocials } from "../Hero/Styles/StyledHero";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import { Micro } from "../Typo/Micro";
import { useWindowSize } from "../../hooks/useWindowSize";

interface NavbarProps {
  areas: { highlighted: boolean; link: string; name: string }[];
}

const Navbar = ({ areas = [] }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const { w, h } = useWindowSize();
  const router = useRouter();

  console.log(h);

  return (
    <Fixed id={"fixed-navbar"}>
      <StyledNavbar>
        <Logo />
        <NavLinks
          windowHeight={h}
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
          variants={{
            open: {
              scaleX: 1,
              transition: {
                when: "beforeChildren",
                staggerDirection: -1,
                staggerChildren: 0.03,
              },
            },
            close: {
              scaleX: 0,
              transition: {
                when: "afterChildren",
                staggerDirection: 1,
                staggerChildren: 0.03,
              },
            },
          }}>
          {[
            {
              name: allProjects.area_name,
              link: `/projects/${allProjects._slug}`,
              highlighted: true,
            },
            ...areas,
            ...strings.navData,
          ].map(({ highlighted, link, name }) => (
            <NavLink
              active={router.asPath === link}
              highlighted={highlighted}
              href={link}
              key={link}>
              {name}
            </NavLink>
          ))}
          <PhoneDecoration
            variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}>
            <ContactUs href={`/contact`}>
              <StyledImg as={"img"} src={"/icons/contact-icon.svg"} />
              <Micro className='uppercase break-lines'>
                {strings.globals.tellUsYourStory}
              </Micro>
            </ContactUs>
            <HeroSocials>
              <Instagram />
              <Vimeo />
            </HeroSocials>
          </PhoneDecoration>
        </NavLinks>
        <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
      </StyledNavbar>
    </Fixed>
  );
};

export default Navbar;
