import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import {
  Close,
  ContentWrapper,
  DialogWrapper,
  Overlay,
  StyledDialog,
  Trigger,
  VisuallyHidden,
} from "./Styles/StyledDialog";

interface DialogProps extends RadixDialog.DialogProps {
  content: ReactNode;
  trigger: ReactNode;
  title: string;
}

const Dialog = ({
  content,
  trigger,
  onOpenChange,
  open,
  title,
}: DialogProps) => {
  return (
    <StyledDialog onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <AnimatePresence>
        {open && (
          <RadixDialog.DialogPortal forceMount>
            <DialogWrapper
              key={"dialog"}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                },
                exit: { opacity: 0 },
              }}
            >
              <Overlay />
              <ContentWrapper>
                <RadixDialog.Content
                  aria-describedby=''
                  // fixes jumping content on close
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <VisuallyHidden>
                    <RadixDialog.Title>{title}</RadixDialog.Title>
                  </VisuallyHidden>
                  {content}
                  <Close>
                    <img src={"icons/close.svg"} alt={"close"} />
                  </Close>
                </RadixDialog.Content>
              </ContentWrapper>
            </DialogWrapper>
          </RadixDialog.DialogPortal>
        )}
      </AnimatePresence>
    </StyledDialog>
  );
};

export default Dialog;
