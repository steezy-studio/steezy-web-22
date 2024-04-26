import * as RadixDialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  Close,
  Content,
  Overlay,
  OverlayW,
  StyledDialog,
  Trigger,
} from "./Styles/StyledDialog";
import { AnimatePresence, motion } from "framer-motion";

interface DialogProps extends RadixDialog.DialogProps {
  content: JSX.Element;
  trigger: JSX.Element;
}

const Dialog = ({
  content,
  trigger,
  onOpenChange,
  open,
  ...rest
}: DialogProps) => {
  return (
    <StyledDialog onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <AnimatePresence>
        {open && (
          <RadixDialog.Portal forceMount>
            <Overlay />
            <Content>
              <Close>
                <img src={"icons/close.svg"} alt={"close"} />
              </Close>
              {content}
            </Content>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </StyledDialog>
  );
};

export default Dialog;
