import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { DisableScroll } from "../../pagestyles/DisableScroll";
import { CursorContext } from "../Cursor/CursorProvider";
import { StyledBlurOverlay } from "./StyledBlurOverlay";

interface BlurOverlayProps {
  onClick?: () => void;
  visible: boolean;
  amount?: number;
}

const BlurOverlay = ({ onClick, visible, amount = 5 }: BlurOverlayProps) => {
  const { setCursorType } = useContext(CursorContext);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <DisableScroll />
          <StyledBlurOverlay
            key={"overlay"}
            onClick={onClick}
            onMouseEnter={() => {
              setCursorType("hover");
            }}
            onMouseLeave={() => {
              setCursorType("normal");
            }}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: `blur(${amount}px)` }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default BlurOverlay;
