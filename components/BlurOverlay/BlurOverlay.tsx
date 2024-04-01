import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { HoverProvider } from "../../pages/_app";

interface BlurOverlayProps {
  onClick?: () => void;
  visible: boolean;
}

const StyledBlurOverlay = styled(motion.div)`
  pointer-events: all;
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 1;
`;

const BlurOverlay = ({ onClick, visible }: BlurOverlayProps) => {
  const { setCursorType } = useContext(HoverProvider);

  return (
    <AnimatePresence>
      {visible && (
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
          animate={{ backdropFilter: "blur( 5px )" }}
          exit={{ backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  );
};

export default BlurOverlay;
