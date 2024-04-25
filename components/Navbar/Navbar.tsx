import { useCart } from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import strings from "../../data/strings";
import { Area } from "../../generated/preprTypes";
import { device, transition } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import { CartToggleContext } from "../Cart/Cart";
import Divider from "../Divider/Divider";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Logo from "../Logo/Logo";
import { Nano } from "../Typo/Nano";
import Burger from "./Burger";
import NavLink from "./NavLink";
import {
  NavHeader,
  NavLinks,
  NavbarCart,
  NavlinksMask,
  PhoneDecoration,
  StyledNavbar,
  Vega,
  VegaW,
  dividerAnimation,
  linksBlockVariants,
} from "./Styles/StyledNavbar";
import { DisableScroll } from "../../pagestyles/DisableScroll";

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
  const navLinksDelay = 0.1;

  return (
    <>
      <AnimatePresence mode={"wait"}>
        {isMenuOpen && (
          <>
            <DisableScroll />
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
                duration: 0.6,
              }}
              variants={linksBlockVariants}
            >
              <VegaW
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 10 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Vega
                  src={"/images/vega.gif"}
                  width={490}
                  height={476}
                  alt='Vincent vega'
                />
              </VegaW>
              {/* {areas.map(({ area_name, _slug, is_default }, i) => ( */}
              <NavLink
                active={router.asPath === `/projects/all-projects`}
                href={`/projects/all-projects`}
              >
                {`Projects`}
              </NavLink>
              <Divider {...dividerAnimation} />
              {strings.navData.map(({ link, name }, i) => (
                <Fragment key={i}>
                  <NavLink
                    delay={(i + 1) * navLinksDelay}
                    active={router.asPath === link}
                    href={link}
                  >
                    {name}
                  </NavLink>
                  <Divider {...dividerAnimation} delay={(i + 1) * 0.7} />
                </Fragment>
              ))}
              <PhoneDecoration
                variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              >
                <Instagram />
                <Vimeo />
              </PhoneDecoration>
            </NavLinks>
          </>
        )}
      </AnimatePresence>
      <StyledNavbar>
        <Logo />
        <NavlinksMask>
          {header && !isTabletPortrait && (
            <NavHeader>
              <Nano>{header}</Nano>
            </NavHeader>
          )}
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
    </>
  );
};

export default Navbar;
