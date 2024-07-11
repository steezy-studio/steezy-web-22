import { useCart } from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { CartToggleContext } from "../Cart/CartProvider";
import { CursorContext } from "../Cursor/CursorProvider";
import Logo from "../Logo/Logo";
import Portal from "../Portal/Portal";
import { RootVideosControllerContext } from "../RootVideosController/RootVideosController";
import { Nano } from "../Typo/Nano";
import Burger from "./Burger";
import { NavbarContext } from "./NavbarControls";
import {
  NavHeader,
  NavbarCart,
  NavlinksMask,
  StyledNavbar,
} from "./Styles/StyledNavbar";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const {
    isOpen: _isOpen,
    setIsOpen,
    navbarHeader,
  } = useContext(NavbarContext);
  const { pathname } = useRouter();
  const isOpen = _isOpen(pathname);
  const { setCursorType } = useContext(CursorContext);
  const { setPauseAllVideos } = useContext(RootVideosControllerContext);
  const { setShowCart } = useContext(CartToggleContext);
  const { w } = useWindowSize();
  const isTabletPortrait = w <= device.tabletPortrait;
  const { lines } = useCart();

  return (
    <>
      <Portal selector={"body"}>
        <StyledNavbar>
          <Logo />
          <NavlinksMask>
            <AnimatePresence mode='wait'>
              {!isTabletPortrait && !isOpen && navbarHeader && (
                <NavHeader
                  key={navbarHeader}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Nano className='uppercase'>{navbarHeader}</Nano>
                </NavHeader>
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
          <Burger
            onClick={() => {
              setPauseAllVideos(!isOpen);
              setIsOpen(pathname, !isOpen);
            }}
            isOpen={isOpen}
          />
        </StyledNavbar>
      </Portal>
    </>
  );
};

export default Navbar;
