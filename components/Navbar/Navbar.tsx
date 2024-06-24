import { useCart } from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import { CartToggleContext } from "../Cart/Cart";
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

interface NavbarProps {
  header?: string;
}

const Navbar = ({ header }: NavbarProps) => {
  const { setAreNavlinksOpen, areNavlinksOpen } = useContext(NavbarContext);
  const { setCursorType } = useContext(HoverProvider);
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
            {!isTabletPortrait && (
              <AnimatePresence mode='wait'>
                {header && (
                  <NavHeader
                    key={header}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Nano>{header}</Nano>
                  </NavHeader>
                )}
              </AnimatePresence>
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
          <Burger
            onClick={() => {
              setPauseAllVideos(!areNavlinksOpen);
              setAreNavlinksOpen((prev) => !prev);
            }}
            isOpen={areNavlinksOpen}
          />
        </StyledNavbar>
      </Portal>
    </>
  );
};

export default Navbar;
