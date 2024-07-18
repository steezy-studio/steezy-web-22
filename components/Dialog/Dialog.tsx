import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";
import {
  Close,
  Content,
  Overlay,
  StyledDialog,
  Trigger,
} from "./Styles/StyledDialog";

interface DialogProps extends RadixDialog.DialogProps {
  content: JSX.Element;
  trigger: JSX.Element;
}

const Dialog = ({ content, trigger, onOpenChange, open }: DialogProps) => {
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
