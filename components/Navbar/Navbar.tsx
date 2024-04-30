import { useCart } from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import strings from "../../data/strings";
import { Area } from "../../generated/preprTypes";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import { DisableScroll } from "../../pagestyles/DisableScroll";
import { CartToggleContext } from "../Cart/Cart";
import Divider from "../Divider/Divider";
import Instagram from "../Icons/Instagram";
import Vimeo from "../Icons/Vimeo";
import Logo from "../Logo/Logo";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
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
  navLinksVariants,
} from "./Styles/StyledNavbar";

interface NavbarProps {
  areas: Area[];
  header?: string;
}

const Navbar = ({ areas, header }: NavbarProps) => {
  const [isMenuOpen, openMenu] = useState(false);
  const [showVega, setshowVega] = useState<boolean>(false);
  const { setCursorType } = useContext(HoverProvider);
  const { setShowCart } = useContext(CartToggleContext);
  const { w } = useWindowSize();
  const isTabletPortrait = w <= device.tabletPortrait;
  const { lines } = useCart();
  const router = useRouter();
  const navLinksDelay = 0.1;
  const timeout = useRef<NodeJS.Timeout>(null);
  const wasVegaDisplayed = useRef<boolean>(false);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    if (isMenuOpen) {
      videos.forEach((video) => video.pause());
    } else {
      videos.forEach((video) => video.play());
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (wasVegaDisplayed.current || !isMenuOpen) return;
    timeout.current = setTimeout(() => {
      setshowVega(true);
      wasVegaDisplayed.current = true;
    }, 8000);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [isMenuOpen]);

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
              variants={navLinksVariants}
            >
              <AnimatePresence>
                {showVega && (
                  <VegaW
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() =>
                      setTimeout(() => setshowVega(false), 5000)
                    }
                  >
                    <Vega
                      src={"/images/vega_opt.gif"}
                      width={490}
                      height={476}
                      alt='Vincent vega'
                    />
                  </VegaW>
                )}
              </AnimatePresence>
              <Divider {...dividerAnimation} />
              {strings.navData.map(
                ({ link, name, iconName, activePaths }, i) => {
                  const isActive =
                    router.asPath.includes(link) ||
                    activePaths.some((path) => router.asPath.includes(path));

                  const delay = (i + 1) * navLinksDelay;
                  return (
                    <Fragment key={i}>
                      <NavLink
                        delay={delay}
                        active={isActive}
                        href={link}
                        iconSrc={`/icons/${iconName}`}
                      >
                        {name}
                      </NavLink>

                      <Divider {...dividerAnimation} delay={(i + 1) * 0.7} />
                    </Fragment>
                  );
                }
              )}
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
              <RevealAnimation delay={0.5}>
                <Nano>{header}</Nano>
              </RevealAnimation>
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
