import { useCart } from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import strings from "../../data/strings";
import { Area } from "../../generated/preprTypes";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import { CartToggleContext } from "../Cart/Cart";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Logo from "../Logo/Logo";
import { Nano } from "../Typo/Nano";
import Burger from "./Burger";
import NavLink from "./NavLink";
import {
  LinksBlock,
  NavHeader,
  NavLinks,
  NavbarCart,
  NavlinksMask,
  PhoneDecoration,
  StyledNavbar,
  linksBlockVariants,
} from "./Styles/StyledNavbar";

interface NavbarProps {
  areas: Area[];
  header?: string;
}

const Navbar = ({ areas, header }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const { setCursorType } = useContext(HoverProvider);
  const { setShowCart } = useContext(CartToggleContext);
  const { w } = useWindowSize();
  const isTabletPortrait = w <= device.tabletPortrait;
  const { lines } = useCart();
  const router = useRouter();
  const navLinksDelay = 0.04;

  return (
    <StyledNavbar>
      <Logo />
      <NavlinksMask>
        <AnimatePresence mode={"wait"}>
          {!isMenuOpen && header && !isTabletPortrait && (
            <NavHeader
              key={"header"}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              transition={{ duration: 0.3 }}
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
              }}
            >
              <Nano>{header}</Nano>
            </NavHeader>
          )}
          {isMenuOpen && (
            <NavLinks
              key={"links"}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              style={{
                transformOrigin: "100% 0%",
                pointerEvents: isMenuOpen ? "all" : "none",
              }}
              transition={{
                type: "tween",
                ease: [0.65, 0.05, 0.36, 1],
              }}
              variants={linksBlockVariants}
            >
              {/* {areas.map(({ area_name, _slug, is_default }, i) => ( */}
              <NavLink
                delay={navLinksDelay}
                active={router.asPath === `/projects/all-projects`}
                href={`/projects/all-projects`}
                // key={_slug}
              >
                {`Projects`}
              </NavLink>
              {strings.navData.map(({ link, name }, i) => (
                <NavLink
                  delay={(areas.length - 1 + i) * navLinksDelay}
                  active={false}
                  href={link}
                >
                  {name}
                </NavLink>
              ))}
              <PhoneDecoration
                variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              >
                <Instagram />
                <Vimeo />
              </PhoneDecoration>
            </NavLinks>
          )}
        </AnimatePresence>
      </NavlinksMask>

      {lines.length !== 0 && (
        <NavbarCart
          onClick={() => {
            setShowCart((p) => !p);
          }}
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("normal")}
        >
          <Nano className='white'>{lines.length}</Nano>
        </NavbarCart>
      )}
      <Burger onClick={() => openMenu((prev) => !prev)} isOpen={isMenuOpen} />
    </StyledNavbar>
  );
};

export default Navbar;
